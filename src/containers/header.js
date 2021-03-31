import React from 'react';
import { Header } from '../components';
function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Box>
          <Header.SearchBox></Header.SearchBox>
        </Header.Box>
        <Header.Profile />
      </Header.Wrapper>
    </Header>
  );
}

export default HeaderContainer;
