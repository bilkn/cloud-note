import React, { useState } from 'react';
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
import {sizes} from '../styles/variables';
import 'styled-components/macro';

export default function Home() {
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
          <ToastContainer /> 
        {/*   <DialogContainer text="Are you sure you want to remove this note?" />  */}

        <MainContainer />
        {/* <MenuContainer />   */}
        {/*   <Backdrop />   */}
      </Wrapper>
    </>
  );
}
