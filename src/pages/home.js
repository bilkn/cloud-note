import React from 'react';
import { Backdrop, Wrapper } from '../components';
import { HeaderContainer, MenuContainer, MainContainer } from '../containers';
import devices from '../devices';

export default function Home() {
  return (
    <Wrapper
      css={`
        @media ${devices.mobile} {
          margin-left: 90px;
        }
      `}
    >
      <MainContainer />
      {/*  <MenuContainer />  */}
      {/*  <Backdrop /> */}
    </Wrapper>
  );
}
