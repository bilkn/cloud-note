import { useContext, useEffect, useRef, useState } from 'react';
import { useData } from '.';
import { DialogContext, ToastContext } from '../context';
import { copyToClipboard, isSecondsPassed, scrollToBottom } from '../helpers';

function useHandler(props) {
  const {
    setCurrentId,
    setShowEnlargedNote,
    setRect,
    id,
    text,
    lastModified,
    timestamp,
    isCurrentId,
    activate,
  } = props;
  const [showButtons, setShowButtons] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [isActive, setIsActive] = useState(false);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const textAreaRef = useRef(null);
  const btnRef = useRef(null);
  const { Add, Delete, DeletePermanently, Modify, Recover, SortByDate } =
    useData();

  const handleToggleClick = (e, id) => {
    e.stopPropagation();
    setShowButtons(!showButtons);
    setCurrentId(id);
  };

  const handleToggleKeyDown = (e) => {
    if (e.key === 'Enter') setTimeout(() => btnRef.current?.focus(), 200);
  };

  const handleEditClick = () => {
    setIsActive(true);
    setShowButtons(false);
    scrollToBottom(textAreaRef.current);
  };

  const handleCopyClick = (textValue) => {
    copyToClipboard(textValue);
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Note has been copied to the clipboard.',
    });
    setShowButtons(false);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    setDialog({
      isOpen: true,
      text: 'Are you sure to delete this note?',
      handler: () => {
        setShowEnlargedNote(false);
        Delete(id);
      },
      buttons: ['Cancel', 'Delete'],
    });
  };

  const handleEnlargeClick = (rect) => {
    const { innerWidth, innerHeight } = window;
    const { width, height } = rect;

    if (width * 1.5 >= innerWidth || height * 1.5 >= innerHeight) {
      setShowButtons(false);
      return dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Screen is too small to enlarge note',
      });
    }

    if (rect) setShowEnlargedNote(true);
    setRect(rect);
    scrollToBottom(textAreaRef.current);
    const { body } = document;
    body.style.overflow = 'hidden';
  };

  const handleRecoverClick = (id) => {
    Recover(id);
  };

  const handlePermanentDeleteClick = (e, id) => {
    e.stopPropagation();
    DeletePermanently(id, 'deleted');
  };

  const handleBlur = () => {
    const textArea = textAreaRef.current;
    if (!isCurrentId) setShowButtons(false);
    if (textValue.trim()) {
      if (!lastModified) Add(id, textValue);
      else Modify(id, textValue);
    } else if (lastModified) Delete(id);
    else DeletePermanently(id, 'results', false, false);
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

  useEffect(() => {
    if (activate) {
      setIsActive(true);
    }
  }, [activate]);

  return {
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
    textValue,
    setTextValue,
    isActive,
    setIsActive,
    textAreaRef,
    btnRef,
  };
}

export default useHandler;
