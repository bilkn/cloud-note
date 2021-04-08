import React from 'react';
import { Header } from '../components';
import { Search } from '@styled-icons/evil/Search';
import { PopoverContainer } from "./"

export default function HeaderContainer() {
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
        <Header.Profile>
        <PopoverContainer />
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}

