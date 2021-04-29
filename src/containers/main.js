import React, { useEffect, useRef, useState } from 'react';
import { Main, Backdrop } from '../components';
import { MemoOfFowardRefNoteContainer } from '../containers';
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
  const noteRef = useRef(null);

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
            <MemoOfFowardRefNoteContainer
              key={data.id}
              {...data}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              isCurrentId={currentId === data.id}
              setCurrentId={setCurrentId}
              setShowEnlargedNote={setShowEnlargedNote}
              ref={noteRef}
            />
          ))}
        </Main.Grid>
      </Main>
      {showEnlargedNote && (
        <Backdrop onClick={handleBackdropClick}>
          <MemoOfFowardRefNoteContainer
            {...getCurrentNoteData}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
            isCurrentId={currentId === data.id}
            setCurrentId={setCurrentId}
            setShowEnlargedNote={setShowEnlargedNote}
            ref= {noteRef}
          />
          {/* !!! Remove setState duplicates. */}
        </Backdrop>
      )}
    </>
  );
}
