import React from 'react';
import { Backdrop, Wrapper, Dialog, Toast } from '../components';
import {
  HeaderContainer,
  MenuContainer,
  MainContainer,
  SidebarContainer,
  DialogContainer,
} from '../containers';
import devices from '../styles/devices';
import 'styled-components/macro';
import { Cross } from '@styled-icons/entypo/Cross';
import {ReactComponent as CrossIcon} from '../assets/cross-icon.svg';
export default function Home() {
  return (
    <>
      <HeaderContainer />
      <SidebarContainer />
      <Toast>
        <Toast.Text>Note has been added</Toast.Text>
        <Toast.Loader duration="2000">
          <Toast.Button>
            <CrossIcon css={`width:17px; height:17px`} />
            {/* <Cross size="20" color="white" /> */}
          </Toast.Button>
        </Toast.Loader>
      </Toast>
      <Wrapper
        css={`
          @media ${devices.tablet} {
            margin-left: 90px;
          }
        `}
      >
        {/* <DialogContainer text="Are you sure you want to remove this note?" /> */}

        <MainContainer />
        {/*  <MenuContainer />  */}
        {/* <Backdrop />  */}
      </Wrapper>
    </>
  );
}
