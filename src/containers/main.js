import React, { useEffect, useState } from 'react';
import { Main, Backdrop } from '../components';
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
  const [showEnlargedNote, setShowEnlargedNote] = useState(false);

  const getCurrentNoteData = displayedData.find(({ id }) => id === currentId);
  const handleBackdropClick = () => setShowEnlargedNote(false);

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
          {displayedData.map((data) => (
            <NoteContainer
              key={data.id}
              {...data}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              isCurrentId={currentId === data.id}
              setCurrentId={setCurrentId}
              setShowEnlargedNote={setShowEnlargedNote}
            />
          ))}
        </Main.Grid>
      </Main>
      {showEnlargedNote && (
        <Backdrop onClick={handleBackdropClick}>
          <NoteContainer
            {...getCurrentNoteData}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
            isCurrentId={currentId === data.id}
            setCurrentId={setCurrentId}
            setShowEnlargedNote={setShowEnlargedNote}
          />
          {/* !!! Remove setState duplicates. */}
        </Backdrop>
      )}
    </>
  );
}
