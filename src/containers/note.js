import React, { useRef } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import {
  useWindowKey,
  useWindowEvent,
  useNoteLogic,
  useMatchLastSubpath,
} from '../hooks';
import { Edit, Fullscreen } from '@styled-icons/boxicons-regular';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { Recycle } from '@styled-icons/remix-fill/Recycle';
import * as ROUTES from '../constants/routes';
function NoteContainer(props) {
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
    activate,
  } = props;
  const noteRef = useRef(null);
  const {
    handleToggleClick,
    handleToggleKeyDown,
    handleEditClick,
    handleCopyClick,
    handleDeleteClick,
    handleEnlargeClick,
    handleRecoverClick,
    handlePermanentDeleteClick,
    handleBlur,
    showButtons,
    setShowButtons,
    isActive,
    textValue,
    setTextValue,
    textAreaRef,
    btnRef,
  } = useNoteLogic({
    setCurrentId,
    setShowEnlargedNote,
    setRect,
    isCurrentId,
    id,
    text,
    lastModified,
    timestamp,
    activate,
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
  const { matchSubpath, pathname } = useMatchLastSubpath();

  const handleNoteClick = (e) => {
    activate && e.stopPropagation(); // If note is initially activated, it stops propagation.
    setCurrentId(id);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const checkTabIndex = showButtons ? '1' : '-1';
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
          <Note.Box active={showButtons} route={pathname}>
            {matchSubpath(ROUTES.HOME) ? (
              <>
                <Note.Button
                  onClick={handleEditClick}
                  title="Edit note"
                  aria-label="Edit note"
                  tabIndex={checkTabIndex}
                  ref={btnRef}
                >
                  <Edit size="24" />
                </Note.Button>
                <Note.Button
                  onClick={() =>
                    handleEnlargeClick(noteRef.current.getBoundingClientRect())
                  }
                  title="Enlarge note"
                  aria-label="Enlarge note"
                  tabIndex={checkTabIndex}
                >
                  <Fullscreen size="24" />
                </Note.Button>
                <Note.Button
                  onClick={() => handleCopyClick(textValue)}
                  title="Copy to clipboard"
                  aria-label="Copy to clipboard"
                  tabIndex={checkTabIndex}
                >
                  <Clipboard size="24" />
                </Note.Button>
                <Note.Button
                  onClick={(e) => handleDeleteClick(e, id)}
                  title="Delete note"
                  aria-label="Delete note"
                  tabIndex={checkTabIndex}
                >
                  <Trash size="24" />
                </Note.Button>
              </>
            ) : (
              <>
                <Note.Button
                  onClick={() => handleRecoverClick(id)}
                  title="Recover note"
                  aria-label="Recover note"
                  tabIndex={checkTabIndex}
                  ref={btnRef}
                >
                  <Recycle size="24" />
                </Note.Button>
                <Note.Button
                  onClick={(e) => handlePermanentDeleteClick(e, id)}
                  title="Delete permanently"
                  aria-label="Delete permanently"
                  tabIndex={checkTabIndex}
                >
                  <Trash size="24" />
                </Note.Button>
              </>
            )}
          </Note.Box>
          <Note.ToggleButton
            active={showButtons}
            onClick={(e) => handleToggleClick(e, id)}
            onKeyDown={handleToggleKeyDown}
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
      {!isActive && (
        <Note.Date>{timestamp.toLocaleDateString('en-US')}</Note.Date>
      )}
    </Note>
  );
}

export default React.memo(NoteContainer);
