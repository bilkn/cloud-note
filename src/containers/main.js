import React, { useEffect, useState } from 'react';
import { Main, Backdrop } from '../components';
import { MemoizedNoteContainer } from '../containers';
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
  const [rect, setRect] = useState(null);
  const handleBackdropClick = () => setShowEnlargedNote(false);
  const getCurrentNoteData = displayedData.find(({ id }) => id === currentId);

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
            <MemoizedNoteContainer
              key={data.id}
              {...data}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              isCurrentId={currentId === data.id}
              setCurrentId={setCurrentId}
              setShowEnlargedNote={setShowEnlargedNote}
              setRect={setRect}
              css={''}
            />
          ))}
        </Main.Grid>
      </Main>
      {showEnlargedNote && (
        <Backdrop onClick={handleBackdropClick}>
          <MemoizedNoteContainer
            {...getCurrentNoteData}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
            isCurrentId={currentId === data.id}
            setCurrentId={setCurrentId}
            setShowEnlargedNote={setShowEnlargedNote}
            style={`
              height: ${rect.height}px;
              left: ${rect.left}px;
              top: ${rect.top}px;
              position: absolute;      
              transition: 500ms;
              transition-property: transform, left, top;
              width: ${rect.width}px
            `}
          />
          {/* !!! Remove setState duplications. */}
        </Backdrop>
      )}
    </>
  );
}
