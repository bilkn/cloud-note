import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import { useData } from '../hooks';

const NoteContainer = React.forwardRef(({ children, ...otherProps }, ref) => {
  const {
    id,
    color,
    text,
    timestamp,
    lastModified,
    isActive,
    setIsActive,
    isCurrentId,
    setCurrentId,
    cssStyle,
  } = otherProps;
  const [textValue, setTextValue] = useState(text);
  const textAreaRef = useRef(null);
  const { Add, Delete, DeletePermanently, Modify, SortByDate } = useData();

  const handleNoteClick = () => {
    setCurrentId(id);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const handleBlur = () => {
    const textArea = textAreaRef.current;
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

  useImperativeHandle(ref, () => ({
    textValue,
  }));

  // Deactivates the active note, if another note's toggle button is clicked.
  useEffect(() => {
    if (!isCurrentId) {
      setIsActive(false);
    }
  }, [isCurrentId, setIsActive]);

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
      ref={isCurrentId ? ref : null}
      css={cssStyle}
    >
      {children}
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
});

export default React.memo(NoteContainer);
