import React, { useState } from 'react';
import { Toast } from '../components';
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg';
import 'styled-components/macro';
import { Text } from '../components/toast/styles/toast';
 const content = {
   id: new Date().getTime(),
   type: 'notification',
   text: "Note has been added."
 };
 const content2 = {
   id: new Date().getTime(),
   type: 'error',
   text: "An error has occurred."
 };
function ToastContainer() {
  const [contentList, setContentList] = useState([content,content2]);

 

  return (
    <Toast>
      {contentList.map(({ id, type, text }) => (
        <Toast.Content key={id} type={type}>
          <Toast.Text>{text}</Toast.Text>
          <Toast.Loader duration="2000">
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
