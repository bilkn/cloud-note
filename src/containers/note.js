import React, { useRef } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import {
  useWindowKey,
  useWindowEvent,
  useNoteHandler,
  useMouseClick,
} from '../hooks';
import { Edit, Fullscreen } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';

export default function NoteContainer(props) {
  const {
    id,
    color,
    text,
    timestamp,
    lastModified,
    isCurrentId,
    setCurrentId,
    setShowEnlargedNote,
    setRect,
    cssStyle,
  } = props;
  const noteRef = useRef(null);
  const { mouseClick, setMouseClick } = useMouseClick();

  const {
    handleEditClick,
    handleCopyClick,
    handleDeleteClick,
    handleToggleClick,
    handleEnlargeClick,
    handleBlur,
    showButtons,
    setShowButtons,
    isActive,
    textValue,
    setTextValue,
    textAreaRef,
  } = useNoteHandler({
    setCurrentId,
    setShowEnlargedNote,
    setRect,
    isCurrentId,
    id,
    text,
    lastModified,
    timestamp,
  });

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

  const handleNoteClick = () => {
    setCurrentId(id);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  return (
    <Note
      color={color}
      animate={!isSecondsPassed(1, timestamp)}
      data-testid="note"
      onClick={handleNoteClick}
      ref={noteRef}
      css={cssStyle}
    >
      {lastModified && (
        <Note.ButtonWrapper>
          <Note.Box active={showButtons}>
            <Note.Button
              onClick={handleEditClick}
              title="Edit note"
              aria-label="Edit note"
            >
              <Edit size="24" />
            </Note.Button>
            <Note.Button
              onClick={() =>
                handleEnlargeClick(noteRef.current.getBoundingClientRect())
              }
              title="Enlarge note"
              aria-label="Enlarge note"
            >
              <Fullscreen size="24" />
            </Note.Button>
            <Note.Button
              onClick={() => handleCopyClick(textValue)}
              title="Copy to clipboard"
              aria-label="Copy to clipboard"
            >
              <Clipboard size="24" />
            </Note.Button>
            <Note.Button
              onClick={() => handleDeleteClick(id)}
              title="Delete note"
              aria-label="Delete note"
            >
              <Trash size="24" />
            </Note.Button>
          </Note.Box>
          <Note.ToggleButton
            active={showButtons}
            mouseClick={mouseClick}
            onClick={(e) => handleToggleClick(e, id)}
            onMouseDown={handleMouseDown}
            title="Toggle note menu"
            aria-label="Toggle note menu"
          />
        </Note.ButtonWrapper>
      )}
      <Note.TextArea
        active={isActive}
        value={textValue}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={!isActive}
        ref={textAreaRef}
        data-testid="note-text-area"
      />
    </Note>
  );
}

export const MemoizedNoteContainer = React.memo(NoteContainer);
