import React from 'react';
import { FlexWrapper, Navigation } from '../components';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';


export default function Account() {
  return (
    <FlexWrapper direction="column">
      <Navigation>
        <Navigation.Breadcrumb>
          <Navigation.Link>Codebee</Navigation.Link>
          <Navigation.Span>/</Navigation.Span>
          <Navigation.Text>Account Settings</Navigation.Text>
        </Navigation.Breadcrumb>
      </Navigation>
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
    </FlexWrapper>
  );
}
