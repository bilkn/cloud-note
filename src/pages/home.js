import React from 'react';
import { Backdrop, Wrapper, Dialog } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
  DialogContainer
} from '../containers';
import devices from '../styles/devices';
import 'styled-components/macro';

export default function Home() {
  return (
    <>
      <DialogContainer text="Are you sure you want to remove this note?" />
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
