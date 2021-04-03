import React from 'react';
import { Navigation } from '../components';

export default function Account() {
  return <Navigation.Menu>
    <Navigation.MenuItem>
      <Navigation.Link>Edit Profile</Navigation.Link>
      <Navigation.Link>Account Settings</Navigation.Link>
      <Navigation.Link>Password</Navigation.Link>
    </Navigation.MenuItem>
  </Navigation.Menu>;
}
