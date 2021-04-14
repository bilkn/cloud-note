import React from 'react';
import { Header, Popover } from '../components';
import { Search } from '@styled-icons/evil/Search';
import { PopoverContainer } from './';
import Picture from '../assets/man-1.png';
import Avatar from '../components/avatar';
import 'styled-components/macro';

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

        {/*   <PopoverContainer /> */}

        <Avatar.Button size="40">
          <Avatar.Picture src={Picture} />
        </Avatar.Button>
      </Header.Wrapper>
    </Header>
  );
}
