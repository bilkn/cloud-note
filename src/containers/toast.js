import React from 'react';
import { Toast } from '../components';
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg';
import 'styled-components/macro';

function ToastContainer() {
  return (
    <Toast>
      <Toast.Content>
        <Toast.Text>Note has been added</Toast.Text>
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
      <Toast.Content>
        <Toast.Text>Note has been added</Toast.Text>
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
    </Toast>
  );
}

export default ToastContainer;
