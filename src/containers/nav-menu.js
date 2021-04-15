import React from 'react';
import { useRouteMatch } from 'react-router';
import { Navigation as Nav } from '../components';
import { useMatchLastSubpath } from '../hooks';
import * as Routes from "../constants/routes"

export default function NavMenuContainer() {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();
 
  return (
    <Nav.Menu>
      <Nav.MenuItem active={matchSubpath(Routes.PROFILE)}>
        <Nav.MenuLink to={`${url}/${Routes.PROFILE}`}>Edit Profile</Nav.MenuLink>
      </Nav.MenuItem>
      <Nav.MenuItem active>
        <Nav.MenuLink active>Account Settings</Nav.MenuLink>
      </Nav.MenuItem>
      <Nav.MenuItem>
        <Nav.MenuLink>Password</Nav.MenuLink>
      </Nav.MenuItem>
    </Nav.Menu>
  );
}
