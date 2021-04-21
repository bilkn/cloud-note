import React, { useContext } from 'react';
import { Toast } from '../components';
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg';
import { ToastContext } from '../context';
import 'styled-components/macro';

function ToastContainer() {
  const [state, dispatch] = useContext(ToastContext);

  const contentRemoveHandler = (contentId) => {
    dispatch({ type: 'REMOVE_CONTENT', payload: contentId });
  };

  return (
    <Toast>
      {state.map(({ id, type, text }) => (
        <Toast.Content key={id} type={type}>
          <Toast.Text>{text}</Toast.Text>
          <Toast.Loader
            id={id}
            duration="2000"
            onAnimationEnd={contentRemoveHandler}
          >
            <Toast.Button id={id} onClick={contentRemoveHandler}>
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
