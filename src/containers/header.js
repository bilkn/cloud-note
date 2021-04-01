import React from 'react';
import { Header } from '../components';
import { Search } from '@styled-icons/evil/Search';
function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Box>
          <Header.SearchBox>
            <Header.Input type="search" placeholder="Find a note" />
            <Header.Icon>
              <Search size="24" />
            </Header.Icon>
          </Header.SearchBox>
        </Header.Box>
        <Header.Profile />
      </Header.Wrapper>
    </Header>
  );
}

export default HeaderContainer;
