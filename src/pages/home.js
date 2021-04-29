import React, { useContext, useState } from 'react';
import {  Wrapper, Dialog } from '../components';
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

export default function Home() {
  const { dataState } = useContext(DataContext);

  return (
    <Wrapper
      css={`
        position: relative;
        @media ${devices.mobile} {
          margin-left: ${sizes.sidebar_width};
        }
      `}
    >
   
      {/*   <MainContainer data={dummyDataList(50)} /> */}
      <MainContainer data={dataState.results} />
      {/* <MenuContainer />   */}
    </Wrapper>
  );
}
