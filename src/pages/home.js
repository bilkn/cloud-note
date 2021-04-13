import React from 'react';
import { Backdrop, Wrapper, Dialog, Toast } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
  DialogContainer,
  ToastContainer,
} from '../containers';
import devices from '../styles/devices';
import 'styled-components/macro';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <SidebarContainer />

      <Wrapper
        css={`
          position: relative;
          @media ${devices.tablet} {
            margin-left: 90px;
          }
        `}
      >
        <ToastContainer />
        {/* <DialogContainer text="Are you sure you want to remove this note?" /> */}

        <MainContainer />
        {/*  <MenuContainer />  */}
        {/* <Backdrop />  */}
      </Wrapper>
    </>
  );
}
