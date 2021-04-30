import { useContext, useState } from 'react';
import { useData } from '.';
import { DialogContext, ToastContext } from '../context';
import { copyToClipboard } from '../helpers';

function useNoteHandler() {
  const [currentId, setCurrentId] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [showEnlargedNote, setShowEnlargedNote] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [rect, setRect] = useState(null);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { Delete } = useData();

  const handleEditClick = () => {
    if (showButtons) {
      setIsActive(true);
    }
  };

  const handleCopyClick = (textValue) => {
    if (showButtons) {
      copyToClipboard(textValue);
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been copied to the clipboard.',
      });
      setIsActive(false);
    }
  };

  const handleDeleteClick = (id) => {
    if (showButtons) {
      setDialog({
        isOpen: true,
        text: 'Are you sure to delete this note?',
        handler: () => Delete(id),
        buttons: ['Cancel', 'Delete'],
      });
      setIsActive(false);
    }
  };

  const handleEnlargeClick = (rect) => {
    setShowEnlargedNote(true);
    setRect(rect);
  };

  const handleToggleClick = (e, id) => {
    e.stopPropagation();
    if (!showButtons) setShowButtons(true);
    else if (currentId === id && showButtons) setShowButtons(false);
    setCurrentId(id);
  };

  return {
    handleEditClick,
    handleCopyClick,
    handleDeleteClick,
    handleToggleClick,
    handleEnlargeClick,
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
  };
}

export default useNoteHandler;
