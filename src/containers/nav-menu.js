import React from 'react';
import { Navigation as Nav } from '../components';

export default function NavMenuContainer() {
  return (
    <Nav.Menu>
      <Nav.MenuItem>
        <Nav.MenuLink>Edit Profile</Nav.MenuLink>
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
