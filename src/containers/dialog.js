import React from 'react';
import { Backdrop, Dialog } from '../components';
import { colors } from '../styles/variables';
import 'styled-components/macro';
import PropTypes from 'prop-types';

export default function DialogContainer({ dialogState, text, operation }) {
  const [, setDialog] = dialogState;

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
  
  return (
    <>
      <Backdrop />
      <Dialog height="150" width="300">
        <Dialog.Text>{text}</Dialog.Text>
        <Dialog.Box>
          <Dialog.Button
            onClick={handleNoClick}
            css={`
              background: ${colors.red};
              color: ${colors.white_1};
              &:hover {
                background: ${colors.red_hover};
              }
            `}
          >
            No
          </Dialog.Button>
          <Dialog.Button
            onClick={handleYesClick}
            css={`
              box-shadow: 0 3px 6px rgba(30, 38, 56, 0.19);
            `}
          >
            Yes
          </Dialog.Button>
        </Dialog.Box>
      </Dialog>
    </>
  );
}

DialogContainer.propTypes = {
  text: PropTypes.string,
  operation: PropTypes.func,
};
