import { useState } from 'react';

function useNoteState() {
  const [showButtons, setShowButtons] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return { showButtons, setShowButtons, isActive, setIsActive };
}

export default useNoteState;
