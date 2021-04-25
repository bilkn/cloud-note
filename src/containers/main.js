import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import { DialogContainer, NoteContainer } from '../containers';
import 'styled-components/macro';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export default function MainContainer({ data }) {
  const { search: searchProp } = useLocation();
  const [mouseClick, setMouseClick] = useState(true);
  const [currentId, setCurrentId] = useState('');
  const [dialog, setDialog] = useState({
    active: false,
    operation: null,
    text: '',
  });
  const dialogState = [dialog, setDialog];
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const handleWindowKeyDown = () => {
      setMouseClick(false);
    };
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

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
          {displayedData.map(({ text, color, timestamp, id }) => (
            <NoteContainer
              key={id}
              id={id}
              color={color}
              timestamp={timestamp}
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
          /* operation={dialog.operation} */
          dialogState={dialogState}
        />
      )}
    </>
  );
}
