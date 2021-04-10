import React from 'react';
import { Navigation } from '../components';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';

export default function MobileNavMenuContainer() {
  return (
    <Navigation.Menu>
      <Navigation.MenuItem>
        <Navigation.MenuLink>
          Edit Profile
          <ChevronDown color="#CFCFCF" size="18" />
        </Navigation.MenuLink>
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
