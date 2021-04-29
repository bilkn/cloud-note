import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import { NoteContainer } from '../containers';
import 'styled-components/macro';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useMouseClick } from '../hooks';

export default function MainContainer({ data }) {
  const { search: searchProp } = useLocation();
  const { mouseClick, setMouseClick } = useMouseClick();
  const [currentId, setCurrentId] = useState('');
  const [displayedData, setDisplayedData] = useState([]);
  useEffect(() => {
    const { search: searchQuery } = queryString.parse(searchProp);
   
    if (searchQuery) {
      const filteredData = data.filter(({ text }) =>
        text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedData(filteredData);
    } else {
      setDisplayedData(data);
    }
  }, [searchProp, data]);
 console.log('main');
  return (
    <>
      <Main>
        <Main.Grid>
          {displayedData.map(({ id, color, text, timestamp, lastModified }) => (
            <NoteContainer
              key={id}
              id ={id}
              color={color}
              text={text}
              timestamp={timestamp}
              lastModified={lastModified}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              isCurrentId={currentId === id}
              setCurrentId={setCurrentId}
            />
          ))}
        </Main.Grid>
      </Main>
    </>
  );
}
