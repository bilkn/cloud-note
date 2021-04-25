import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import { DialogContainer, NoteContainer } from '../containers';
import 'styled-components/macro';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useMouseClick } from '../hooks';

export default function MainContainer({ data }) {
  const { search: searchProp } = useLocation();
  const { mouseClick, setMouseClick } = useMouseClick();
  const [currentId, setCurrentId] = useState('');
  const [dialog, setDialog] = useState({
    active: false,
    operation: null,
    text: '',
  });
  const dialogState = [dialog, setDialog];
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
        <Main.Wrapper>
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
              dialogState={dialogState}
            />
          ))}
        </Main.Wrapper>
      </Main>
      {dialog.active && (
        <DialogContainer
          text={dialog.text}
          operation={dialog.operation}
          dialogState={dialogState}
        />
      )}
    </>
  );
}
