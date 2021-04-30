import React, { useContext, useRef, useState } from 'react';
import 'styled-components/macro';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import { DataContext } from '../context';
import { Edit, Fullscreen } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { MainContainer, NoteContainer } from '../containers';
import { Wrapper, Note, Main, Backdrop } from '../components';
import {
  useNoteHandler,
  useMouseClick,
  useWindowEvent,
  useWindowKey,
} from '../hooks';

export default function Home() {
  const [displayedData, setDisplayedData] = useState([]);
  const { mouseClick, setMouseClick } = useMouseClick();
  const noteRef = useRef(null);
  const { dataState } = useContext(DataContext);
  const {
    handleEditClick,
    handleEnlargeClick,
    handleCopyClick,
    handleDeleteClick,
    handleToggleClick,
    currentId,
    setCurrentId,
    showButtons,
    setShowButtons,
    showEnlargedNote,
    setShowEnlargedNote,
    rect,
    setRect,
    isActive,
    setIsActive,
  } = useNoteHandler();
  useWindowEvent({
    events: [{ event: 'click' }],
    handlers: [() => setShowButtons(false)],
    condition: showButtons,
  });
  useWindowKey({
    keys: ['Escape'],
    handlers: [() => setShowButtons(false)],
    condition: showButtons,
  });

  const handleMouseDown = () => {
    setMouseClick(true);
  };

  console.log(noteRef);

  const handleBackdropClick = () => setShowEnlargedNote(false);

  const willButtonsShow = (data) => currentId === data.id && showButtons;

  const getCurrentNoteData = displayedData.find(({ id }) => id === currentId);

  return (
    <>
      <Wrapper
        css={`
          position: relative;
          @media ${devices.mobile} {
            margin-left: ${sizes.sidebar_width};
          }
        `}
      >
        <MainContainer
          data={dataState.results}
          displayedData={displayedData}
          setDisplayedData={setDisplayedData}
          mouseClick={mouseClick}
          setMouseClick={setMouseClick}
          showButtons={showButtons}
          setShowButtons={setShowButtons}
          rect={rect}
        >
          <Main.Grid>
            {displayedData.map((data) => (
              <NoteContainer
                key={data.id}
                {...data}
                isCurrentId={currentId === data.id}
                setCurrentId={setCurrentId}
                showButtons={willButtonsShow(data)}
                setShowButtons={setShowButtons}
                setRect={setRect}
                cssStyle={''}
                ref={noteRef}
                isActive={currentId === data.id && isActive}
                setIsActive={setIsActive}
              >
                {data.lastModified && (
                  <Note.ButtonWrapper>
                    <Note.Box active={willButtonsShow(data)}>
                      <Note.Button
                        onClick={handleEditClick}
                        title="Edit note"
                        aria-label="Edit note"
                      >
                        <Edit size="24" />
                      </Note.Button>
                      <Note.Button
                        /*  onClick={() =>
                    handleEnlargeClick(noteRef.current.getBoundingClientRect())
                  } */
                        title="Enlarge note"
                        aria-label="Enlarge note"
                      >
                        <Fullscreen size="24" />
                      </Note.Button>
                      <Note.Button
                        /*  onClick={() => handleCopyClick(textValue)} */
                        title="Copy to clipboard"
                        aria-label="Copy to clipboard"
                      >
                        <Clipboard size="24" />
                      </Note.Button>
                      <Note.Button
                        onClick={() => handleDeleteClick(data.id)}
                        title="Delete note"
                        aria-label="Delete note"
                      >
                        <Trash size="24" />
                      </Note.Button>
                    </Note.Box>
                    <Note.ToggleButton
                      active={willButtonsShow(data)}
                      mouseClick={mouseClick}
                      onClick={(e) => handleToggleClick(e, data.id)}
                      onMouseDown={handleMouseDown}
                      title="Toggle note menu"
                      aria-label="Toggle note menu"
                    />
                  </Note.ButtonWrapper>
                )}
              </NoteContainer>
            ))}
          </Main.Grid>
        </MainContainer>
      </Wrapper>
      {showEnlargedNote && (
        <Backdrop onClick={handleBackdropClick}>
          <NoteContainer
            {...getCurrentNoteData}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
            isCurrentId={true}
            setCurrentId={setCurrentId}
            cssStyle={`
              height: ${rect.height}px;
              left: ${rect.left}px;
              top: ${rect.top}px;
              position: absolute;      
              transition: 500ms;
              transition-property: transform, left, top;
              width: ${rect.width}px
            `}
          />
        </Backdrop>
      )}
    </>
  );
}
