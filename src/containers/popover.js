import React from 'react';
import { Popover } from '../components';
import { useFirebaseAuth } from '../hooks';
import * as ROUTES from '../constants/routes';

export default function PopoverContainer({ ...restProps }) {
  const { signout } = useFirebaseAuth();

  const handleSignOut = () => {
    signout();
  };

  return (
    <Popover {...restProps}>
      <Popover.List>
        <Popover.Item>
          <Popover.ButtonLink to={`${ROUTES.ACCOUNT}${ROUTES.PROFILE}`}>
            Edit Profile
          </Popover.ButtonLink>
        </Popover.Item>
        <Popover.Line />
        <Popover.Item>
          <Popover.ButtonLink to={ROUTES.ACCOUNT}>
            Account Settings
          </Popover.ButtonLink>
        </Popover.Item>
        <Popover.Line />
        <Popover.Item>
          <Popover.ButtonLink onClick={handleSignOut} to={ROUTES.HOME}>
            Sign Out
          </Popover.ButtonLink>
        </Popover.Item>
      </Popover.List>
    </Popover>
  );
}
