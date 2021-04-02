import React from 'react';
import { Header, Popover } from '../components';
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
        <Header.Profile>
          <Popover>
            <Popover.List>
              <Popover.Item>
                <Popover.ButtonLink>Edit Profile</Popover.ButtonLink>
              </Popover.Item>
              <Popover.Item>
                <Popover.ButtonLink>Account Settings</Popover.ButtonLink>
              </Popover.Item>
              <Popover.Item>
                <Popover.ButtonLink>Help</Popover.ButtonLink>
              </Popover.Item>
              <Popover.Item>
                <Popover.ButtonLink>Sign Out</Popover.ButtonLink>
              </Popover.Item>
            </Popover.List>
          </Popover>
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}

export default HeaderContainer;
