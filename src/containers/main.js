import React, { useEffect, useState, useCallback } from 'react';
import { Main, Backdrop, Heading } from '../components';
import { NoteContainer } from '../containers';
import 'styled-components/macro';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { scaleUpToCenter } from '../styles/animations';
import { css } from 'styled-components/macro';
import { useWindowKey } from '../hooks';

export default function MainContainer({ data }) {
  const { search: searchProp } = useLocation();
  const [currentId, setCurrentId] = useState('');
  const [displayedData, setDisplayedData] = useState([]);
  const [showEnlargedNote, setShowEnlargedNote] = useState(false);
  const [rect, setRect] = useState(null);

  const getSearchValue = useCallback(
    () => new URL(document.location).searchParams.get('search'),
    []
  );

  useWindowKey({
    keys: ['Escape'],
    handlers: [() => setShowEnlargedNote(false)],
    condition: true,
  });

  const handleBackdropClick = () => {
    setShowEnlargedNote(false);
    document.body.style.overflow = 'auto';
  };

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
        {displayedData.length ? (
          <Main.Grid>
            {displayedData.map((data) => (
              <NoteContainer
                // Last modified date was used as key to fix no rerendering problem that occurs after editing the note on enlarged mode.
                key={data.lastModified?.getTime() || data.id}
                {...data}
                isCurrentId={currentId === data.id}
                setCurrentId={setCurrentId}
                setShowEnlargedNote={setShowEnlargedNote}
                setRect={setRect}
                cssStyle={''}
              />
            ))}
          </Main.Grid>
        ) : (
          <Heading>{`Your search for "${
            getSearchValue() || ''
          }" did not have any matches.`}</Heading>
        )}
      </Main>
      {showEnlargedNote && (
        <Backdrop
          onClick={handleBackdropClick}
          css={`
            overflow: auto;
          `}
        >
          <NoteContainer
            {...getCurrentNoteData}
            isCurrentId={currentId === data.id}
            setCurrentId={setCurrentId}
            setShowEnlargedNote={setShowEnlargedNote}
            cssStyle={css`
              animation: ${scaleUpToCenter} 500ms forwards;
              height: ${rect?.height}px;
              left: ${rect?.left}px;
              top: ${rect?.top}px;
              position: absolute;
              transition: 500ms;
              transition-property: transform, left, top;
              width: ${rect?.width}px;
            `}
            activate={true}
          />
        </Backdrop>
      )}
    </>
  );
}
