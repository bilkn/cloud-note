import React from 'react';
import { Navigation } from '../components';

export default function NavMenu() {
  return (
    <Navigation.Menu>
      <Navigation.MenuItem>
        <Navigation.MenuLink>Edit Profile</Navigation.MenuLink>
      </Navigation.MenuItem>
      <Navigation.MenuItem>
        <Navigation.MenuLink>Account Settings</Navigation.MenuLink>
      </Navigation.MenuItem>
      <Navigation.MenuItem>
        <Navigation.MenuLink>Password</Navigation.MenuLink>
      </Navigation.MenuItem>
    </Navigation.Menu>
  );
}
