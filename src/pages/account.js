import React from 'react';
import { FlexWrapper, Navigation } from '../components';

export default function Account() {
  return (
    <FlexWrapper>
      <Navigation>
        <Navigation.Breadcrumb>
          <Navigation.Link>Codebee</Navigation.Link>
          <Navigation.Span>/</Navigation.Span>
          <Navigation.Text>Account Settings</Navigation.Text>
        </Navigation.Breadcrumb>
      </Navigation>
      {/* <Navigation.Menu>
        <Navigation.MenuItem>
          <Navigation.Link>Edit Profile</Navigation.Link>
          <Navigation.Link>Account Settings</Navigation.Link>
          <Navigation.Link>Password</Navigation.Link>
        </Navigation.MenuItem>
      </Navigation.Menu> */}
    </FlexWrapper>
  );
}
