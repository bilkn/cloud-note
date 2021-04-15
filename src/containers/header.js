import React, { useState, useEffect, useCallback } from 'react';
import { Header, Popover } from '../components';
import { Search } from '@styled-icons/evil/Search';
import { PopoverContainer } from './';
import Picture from '../assets/man-1.png';
import Avatar from '../components/avatar';
import 'styled-components/macro';

export default function HeaderContainer() {
  const [showPopover, setShowPopover] = useState(false);
  const handleAvatarClick = () => setShowPopover(!showPopover);

  const handleWindowClick = useCallback(() => {
    setShowPopover(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setShowPopover(false);
  }, []);

  useEffect(() => {
    if (showPopover) {
      window.addEventListener('click', handleWindowClick);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleWindowClick);
    };
  }, [handleWindowClick, handleKeyDown, showPopover]);
  
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
        <Avatar.Button size="40" onClick={handleAvatarClick}>
          <Avatar.Picture src={Picture} />
          {showPopover && <PopoverContainer />}
        </Avatar.Button>
      </Header.Wrapper>
    </Header>
  );
}
