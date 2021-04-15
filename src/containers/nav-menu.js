import React from 'react';
import { useRouteMatch } from 'react-router';
import { Navigation as Nav } from '../components';
import { useMatchLastSubpath } from '../hooks';
import * as Routes from '../constants/routes';

export default function NavMenuContainer() {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();

  // !!! May be refactored in the future.
  return (
    <Nav.Menu>
      <Nav.MenuItem active={matchSubpath(Routes.PROFILE)}>
        <Nav.MenuLink
          to={`${url}${Routes.PROFILE}`}
          active={matchSubpath(Routes.PROFILE)}
        >
          Edit Profile
        </Nav.MenuLink>
      </Nav.MenuItem>
      <Nav.MenuItem active={matchSubpath(Routes.ACCOUNT)}>
        <Nav.MenuLink to={Routes.ACCOUNT} active={matchSubpath(Routes.ACCOUNT)}>
          Account Settings
        </Nav.MenuLink>
      </Nav.MenuItem>
      <Nav.MenuItem active={matchSubpath(Routes.PASSWORD)}>
        <Nav.MenuLink
          to={`${url}${Routes.PASSWORD}`}
          active={matchSubpath(Routes.PASSWORD)}
        >
          Password
        </Nav.MenuLink>
      </Nav.MenuItem>
    </Nav.Menu>
  );
}
