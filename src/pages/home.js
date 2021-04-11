import React from 'react';
import { Backdrop, Wrapper } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
} from '../containers';
import devices from '../devices';
import "styled-components/macro"

export default function Home() {
  return (
    <>
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
