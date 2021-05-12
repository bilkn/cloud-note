import React, { useRef, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop, Dialog } from '../components';
import { colors } from '../styles/variables';
import 'styled-components/macro';
import { DialogContext } from '../context';
import { useWindowEvent, useWindowKey } from '../hooks';

export default function DialogContainer() {
  const [dialog, setDialog] = useContext(DialogContext);
  const ref = useRef(null);
  const { isOpen, text, handler, buttons } = dialog;
  useWindowEvent({
    events: [{ event: 'click' }],
    handlers: [() => resetDialog()],
    condition: dialog,
  });
  useWindowKey({
    keys: ['Escape'],
    handlers: [() => resetDialog()],
    condition: dialog,
  });

  const resetDialog = () => {
    setDialog({ isOpen: false, text: '', operation: null });
  };

  const handleYesClick = () => {
    handler();
    resetDialog();
  };

  const handleNoClick = () => {
    resetDialog();
  };
  
  useEffect(() => {
    if (isOpen) {
      const noBtn = ref.current;
      noBtn.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
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
            {buttons[0]}
          </Dialog.Button>
          <Dialog.Button
            onClick={handleYesClick}
            css={`
              box-shadow: 0 3px 6px rgba(30, 38, 56, 0.19);
            `}
          >
            {buttons[1]}
          </Dialog.Button>
        </Dialog.Box>
      </Dialog>
    </>,
    document.getElementById('portal')
  );
}
