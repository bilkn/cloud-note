import React, { useState, useEffect, useCallback } from 'react';
import { Form, Header, Popover } from '../components';
import { Search } from '@styled-icons/evil/Search';
import { PopoverContainer } from './';
import Picture from '../assets/man-1.png';
import Avatar from '../components/avatar';
import 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer() {
  const [showPopover, setShowPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleAvatarClick = () => setShowPopover(!showPopover);
  const handleWindowClick = useCallback(() => {
    setShowPopover(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setShowPopover(false);
  }, []);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

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
            <Header.Input
              type="search"
              placeholder="Find a note"
              onChange={handleSearchChange}
              value={searchValue}
            />
            <Header.Icon>
              <Search size="24" />
            </Header.Icon>
          </Header.SearchBox>
        </Header.Box>
        {/* <Header.Wrapper>
          <Form.Button
            to={ROUTES.SIGN_IN}
            forwardedAs={ReactRouterLink}
            css={`
              background: none;
              color: black;
              margin: 0;
              margin-right: 0.5em;
              &:hover {
                background: none;
              }
            `}
          >
            Sign In
          </Form.Button>
          <Form.ButtonRed
            to={ROUTES.SIGN_UP}
            forwardedAs={ReactRouterLink}
            css={`
              margin: 0;
            `}
          >
            Sign Up
          </Form.ButtonRed>
        </Header.Wrapper> */}
        <Avatar.Button
          size="40"
          onClick={handleAvatarClick}
          data-testid="avatar"
        >
          <Avatar.Picture src={Picture} />
          {showPopover && <PopoverContainer data-testid="popover" />}
        </Avatar.Button>
      </Header.Wrapper>
    </Header>
  );
}
