import React from 'react';
import { Backdrop, Wrapper, Dialog } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
} from '../containers';
import devices from '../styles/devices';
import 'styled-components/macro';
import { colors } from '../styles/variables';

export default function Home() {
  return (
    <>
      <Dialog height="150" width="300">
        <Dialog.Text>Are you sure you want to remove this note?</Dialog.Text>
        <Dialog.Box>
          <Dialog.Button
            css={`
              background: ${colors.red};
              color: #f7f9fa;
            `}
          >
            No
          </Dialog.Button>
          <Dialog.Button
            css={`
              box-shadow: 0 3px 6px rgba(30, 38, 56, 0.08);
            `}
          >
            Yes
          </Dialog.Button>
        </Dialog.Box>
      </Dialog>
      <SidebarContainer />
      <HeaderContainer />
      <Wrapper
        css={`
          @media ${devices.tablet} {
            margin-left: 90px;
          }
        `}
      >
        <MainContainer />
        {/*  <MenuContainer />  */}
        {/*  <Backdrop /> */}
      </Wrapper>
    </>
  );
}
