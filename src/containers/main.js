import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import {NoteContainer } from '../containers';
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

  return (
    <>
      <Main>
        <Main.Grid>
          {displayedData.map(({ text, color, timestamp, lastModified, id }) => (
            <NoteContainer
              key={id}
              id={id}
              color={color}
              timestamp={timestamp}
              lastModified={lastModified}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              text={text}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          ))}
        </Main.Grid>
      </Main>
    </>
  );
}
