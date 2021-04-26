import React, { useRef, useEffect } from 'react';
import { Backdrop, Dialog } from '../components';
import { colors } from '../styles/variables';
import 'styled-components/macro';

export default function DialogContainer({ dialogState, text, operation }) {
  const [dialog, setDialog] = dialogState;
  const ref = useRef(null);

  const resetDialog = () => {
    setDialog({ active: false, text: '', operation: null });
  };

  const handleYesClick = () => {
    operation();
    resetDialog();
  };

  const handleNoClick = () => {
    resetDialog();
  };

  useEffect(() => {
    const noBtn = ref.current;
    noBtn.focus();
  }, [dialog]);

  return (
    <>
      <Backdrop />
      <Dialog role="dialog">
        <Dialog.Text>{text}</Dialog.Text>
        <Dialog.Box>
          <Dialog.Button
            ref={ref}
            onClick={handleNoClick}
            css={`
              background: ${colors.red};
              color: ${colors.white_1};
              &:hover {
                background: ${colors.red_hover};
              }
            `}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            onClick={handleYesClick}
            css={`
              box-shadow: 0 3px 6px rgba(30, 38, 56, 0.19);
            `}
          >
            Delete
          </Dialog.Button>
        </Dialog.Box>
      </Dialog>
    </>
  );
}
