import React, { useEffect, useRef, useState } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import { Cross } from '@styled-icons/entypo/Cross';
import { NoteButtonContainer } from '.';
import { useData, useWindowKey, useWindowEvent } from '../hooks';

export default function NoteContainer(props) {
  const {
    id,
    mouseClick,
    setMouseClick,
    color,
    timestamp,
    lastModified,
    text,
    currentId,
    setCurrentId,
    dialogState,
  } = props;
  const [showButtons, setShowButtons] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const textAreaRef = useRef(null);
  const { Add, Delete, DeleteSilently, Modify, SortByDate } = useData();
  useWindowEvent({
    events: [{event:'click'}],
    handlers: [() => setShowButtons(false)],
    condition: showButtons,
  });
  useWindowKey({
    keys: ['Escape'],
    handlers: [() => setShowButtons(false)],
    condition: showButtons,
  });

  const handleToggleClick = (e) => {
    e.stopPropagation();
    setShowButtons(!showButtons);
    setCurrentId(id);
  };

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
    if (!(currentId === id)) setShowButtons(false);
    if (textValue.trim()) {
      if (!lastModified) Add(id, textValue);
      else Modify(id, textValue);
    } else if (lastModified) Delete(id);
    else DeleteSilently(id);
    SortByDate();
    setIsActive(false);
  };

  // Deactivates the active note, if another note's toggle button is clicked.
  useEffect(() => {
    if (currentId && currentId !== id) {
      setShowButtons(false);
      setIsActive(false);
    }
  }, [currentId, id]);

  // Activates the note, if it is just created.
  useEffect(() => {
    if (!isSecondsPassed(1, timestamp)) {
      setIsActive(true);
      setCurrentId(id);
    }
  }, [timestamp, id, setCurrentId, isActive]);

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
    >
      {lastModified && (
        <Note.Box
          active={showButtons}
          mouseClick={mouseClick}
          onClick={handleToggleClick}
          onMouseDown={handleMouseDown}
          role="button"
          title="Toggle note menu"
          tabIndex="0"
          aria-label="Toggle note menu"
        >
          <Cross
            size="28"
            css={`
              color: inherit;
              opacity: ${showButtons ? '1' : '0'};
            `}
          />

          <NoteButtonContainer
            showButtons={showButtons}
            setIsActive={setIsActive}
            textValue={textValue}
            mouseClick={mouseClick}
            id={id}
            dialogState={dialogState}
          />
        </Note.Box>
      )}

      <Note.TextArea
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
