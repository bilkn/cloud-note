import React, { useEffect, useRef, useState } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import { Cross } from '@styled-icons/entypo/Cross';
import { NoteButtonContainer } from '.';
import { useData } from '../hooks';

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
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const textAreaRef = useRef(null);
  const { Add, DeleteSilently, Modify, SortByDate } = useData();

  const handleMouseUp = () => {
    setIsButtonsActive(!isButtonsActive);
    setCurrentId(id);
  };

  const handleMouseDown = () => {
    setMouseClick(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsButtonsActive(!isButtonsActive);
      setCurrentId(id);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const handleBlur = () => {
    if (!(currentId === id)) setIsButtonsActive(false);
    if (textValue) {
      if (!lastModified) Add(id, textValue);
      else Modify(id, textValue);
    } else DeleteSilently(id);
    SortByDate();
    setIsActive(false);
  };

  useEffect(() => {
    if (currentId && currentId !== id) {
      setIsButtonsActive(false);
      setIsActive(false);
    }
  }, [currentId, id]);

  useEffect(() => {
    if (!isSecondsPassed(1, timestamp)) {
      setIsActive(true);
      setCurrentId(id);
    }
  }, [timestamp, id, setCurrentId, isActive]);

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
    >
      <Note.Box
        active={isButtonsActive}
        mouseClick={mouseClick}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        role="button"
        title="Toggle note menu"
        tabIndex="0"
        aria-label="Toggle note menu"
        onClick={(e) => e.stopPropagation()}
      >
        <Cross
          size="28"
          css={`
            color: inherit;
            opacity: ${isButtonsActive ? '1' : '0'};
          `}
        />
        <NoteButtonContainer
          isButtonsActive={isButtonsActive}
          setIsActive={setIsActive}
          textValue={textValue}
          mouseClick={mouseClick}
          id={id}
          dialogState={dialogState}
        />
      </Note.Box>
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
