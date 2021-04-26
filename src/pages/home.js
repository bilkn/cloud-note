import React, { useContext, useState } from 'react';
import { Backdrop, Wrapper, Dialog } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
  DialogContainer,
} from '../containers';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import 'styled-components/macro';
import { DataContext } from '../context';
import { dummyDataList } from '../fixtures/dummy-data';

export default function Home() {
  const { dataState } = useContext(DataContext);

  return (
    <>
      <Wrapper
        css={`
          position: relative;
          @media ${devices.mobile} {
            margin-left: ${sizes.sidebar_width};
          }
        `}
      >
        {/* <MainContainer data={dataState.results} /> */}
        <MainContainer data={dummyDataList(100)} />
        {/* <MenuContainer />   */}
      </Wrapper>
    </>
  );
}
