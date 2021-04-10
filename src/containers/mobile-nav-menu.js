import React from 'react';
import { MobileNav } from '../components';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';

export default function MobileNavMenuContainer() {
  return (
    <MobileNav.Menu>
      <MobileNav.MenuItem>
        <MobileNav.MenuLink>
          Edit Profile
          <ChevronDown color="#CFCFCF" size="18" />
        </MobileNav.MenuLink>
      </MobileNav.MenuItem>
      <MobileNav.MenuItem>
        <MobileNav.MenuLink>Account Settings</MobileNav.MenuLink>
      </MobileNav.MenuItem>
      <MobileNav.MenuItem>
        <MobileNav.MenuLink>Password</MobileNav.MenuLink>
      </MobileNav.MenuItem>
    </MobileNav.Menu>
  );
}
