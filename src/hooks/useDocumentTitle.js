import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import * as ROUTES from '../constants/routes';

export default function useDocumentTitle() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const prefix = ' - CloudNote';
    let title = '';

    const changeTitle = () => {
      switch (pathname) {
        case ROUTES.DELETED:
          title = 'Deleted Notes';
          break;
        case ROUTES.ACCOUNT:
          title = 'Account Settings';
          break;
        case ROUTES.ACCOUNT+ROUTES.PROFILE:
          title = 'Edit Profile';
          break;
        case ROUTES.ACCOUNT+ROUTES.PASSWORD:
          title = 'Change Password';
          break;
        case ROUTES.SIGN_IN:
          title = 'Sign In';
          break;
        case ROUTES.SIGN_UP:
          title = 'Sign Up';
          break;
        case ROUTES.PASSWORD_RESET:
          title = 'Forgot Password';
          break;
        default:
          title = 'CloudNote';
          break;
      }
      if (title !== 'CloudNote') return (document.title = title + prefix);
      document.title = title;
    };
    changeTitle();
  }, [pathname]);
}
