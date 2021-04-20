import React, { useState } from 'react';
import { Toast } from '../components';
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg';
import 'styled-components/macro';
import { v4 as uuidv4 } from 'uuid';

const content = {
  id: uuidv4(),
  type: 'notification',
  text: 'Note has been added.',
};
const content2 = {
  id: uuidv4(),
  type: 'error',
  text: 'An error has occurred.',
};

function ToastContainer() {
  const [contentList, setContentList] = useState([content, content2]);

  const handleAnimationEnd = (currentId) => {
    setContentList(() => {
      return contentList.filter(({ id }) => id !== currentId);
    });
  };

  return (
    <Toast>
      {contentList.map(({ id, type, text }) => (
        <Toast.Content key={id} type={type}>
          <Toast.Text>{text}</Toast.Text>
          <Toast.Loader
            id={id}
            duration="2000"
            onAnimationEnd={handleAnimationEnd}
          >
            <Toast.Button>
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
