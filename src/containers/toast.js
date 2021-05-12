import React, { useContext } from 'react';
import 'styled-components/macro';
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg';
import { Toast } from '../components';
import { ToastContext } from '../context';

function ToastContainer() {
  const {toastState, dispatchToast} = useContext(ToastContext);

  const contentRemoveHandler = (contentId) => {
    dispatchToast({ type: 'REMOVE_CONTENT', payload: contentId });
  };

  return (
    <Toast>
      {toastState.map(({ id, type, text }) => (
        <Toast.Content key={id} type={type}>
          <Toast.Text>{text}</Toast.Text>
          <Toast.Loader
            id={id}
            duration="3000"
            onAnimationEnd={contentRemoveHandler}
          >
            <Toast.Button
              id={id}
              onClick={contentRemoveHandler}
              title="Dismiss"
              aria-label="Dismiss"
            >
              <CrossIcon
                css={`
                  width: 17px;
                  height: 17px;
                `}
              />
            </Toast.Button>
          </Toast.Loader>
        </Toast.Content>
      ))}
    </Toast>
  );
}

export default ToastContainer;
