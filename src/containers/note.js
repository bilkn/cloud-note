import React, { useEffect, useRef, useState } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import {
  useData,
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
  const [textValue, setTextValue] = useState(text);
  const textAreaRef = useRef(null);
  const noteRef = useRef(null);
  const { Add, Delete, DeletePermanently, Modify, SortByDate } = useData();
  const { mouseClick, setMouseClick } = useMouseClick();

  const {
    handleEditClick,
    handleCopyClick,
    handleDeleteClick,
    handleToggleClick,
    handleEnlargeClick,
    showButtons,
    setShowButtons,
    isActive,
    setIsActive,
  } = useNoteHandler({
    setCurrentId,
    setShowEnlargedNote,
    setRect,
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

  const handleBlur = () => {
    const textArea = textAreaRef.current;
    if (!isCurrentId) setShowButtons(false);
    if (textValue.trim()) {
      if (!lastModified) Add(id, textValue);
      else Modify(id, textValue);
    } else if (lastModified) Delete(id);
    else DeletePermanently(id);
    SortByDate();
    setIsActive(false);
    textArea.scroll({
      top: 0,
    });
  };


  // Deactivates the active note, if another note's toggle button is clicked.
  useEffect(() => {
    if (!isCurrentId) {
      setShowButtons(false);
      setIsActive(false);
    }
  }, [isCurrentId, setIsActive, setShowButtons]);

  // Activates the note, if it is just created.
  useEffect(() => {
    if (!isSecondsPassed(1, timestamp)) {
      setIsActive(true);
      setCurrentId(id);
    }
  }, [timestamp, id, setCurrentId, isActive, setIsActive]);

  // Prevents the text selector to be positioned the beginning of the text.
  useEffect(() => {
    const textArea = textAreaRef.current;
    const length = textValue.length;
    if (isActive) {
      textArea.focus();
      textArea.setSelectionRange(length, length);
    } else textArea.blur();
  }, [isActive, textValue]);
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
