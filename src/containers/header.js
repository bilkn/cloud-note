import React, { useState } from 'react';
import { Form, Header, Avatar } from '../components';
import { FirebaseAuthContext } from '../context';
import { Search } from '@styled-icons/evil/Search';
import { PopoverContainer } from './';
import Picture from '../assets/man-1.png';
import 'styled-components/macro';
import {
  Link as ReactRouterLink,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import useQuery from '../hooks/useQuery';
import { useWindowEvent, useWindowKey, useFirebaseAuth } from '../hooks';
import devices from '../styles/devices';

export default function HeaderContainer() {
  const [showPopover, setShowPopover] = useState(false);
  const { currentUser } = useFirebaseAuth(FirebaseAuthContext);
  const { query, setQuery } = useQuery('search');
  const { pathname } = useLocation();
  const history = useHistory();

  useWindowEvent({
    events: [{ event: 'click' }],
    handlers: [() => setShowPopover(false)],
    condition: showPopover,
  });
  useWindowKey({
    keys: ['Escape'],
    handlers: [() => setShowPopover(!showPopover)],
    condition: showPopover,
  });

  const handleAvatarClick = () => setShowPopover(!showPopover);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    if (query && pathname !== ROUTES.HOME && pathname !== ROUTES.DELETED) {
      history.push(ROUTES.HOME);
    }
  };

  return (
    <Header>
      <Header.Wrapper>
        <Header.Box>
          <Header.SearchBox>
            <Header.Input
              type="search"
              placeholder="Find a note"
              onChange={handleSearchChange}
              value={query}
              data-testid="search-input"
            />
            <Header.Icon>
              <Search size="24" />
            </Header.Icon>
          </Header.SearchBox>
        </Header.Box>
        <Header.Wrapper>
          {currentUser ? (
            <>
              <Avatar.Button
                size="40"
                onClick={handleAvatarClick}
                data-testid="avatar"
                aria-label="Toggle profile menu"
              >
                <Avatar.Picture src={Picture} alt={currentUser.displayName} />
                {showPopover && <PopoverContainer data-testid="popover" />}
              </Avatar.Button>
            </>
          ) : (
            <>
              <Form.Button
                to={ROUTES.SIGN_IN}
                forwardedAs={ReactRouterLink}
                css={`
                  background: none;
                  color: black;
                  margin: 0;
                  margin-right: 0.5em;
                  display: none;
                  @media ${devices.tablet} {
                    display: block;
                  }
                `}
              >
                Sign In
              </Form.Button>
              <Form.Button
                variant="red"
                to={ROUTES.SIGN_UP}
                forwardedAs={ReactRouterLink}
                css={`
                  margin: 0;
                `}
              >
                Sign Up
              </Form.Button>
            </>
          )}
        </Header.Wrapper>
      </Header.Wrapper>
    </Header>
  );
}
