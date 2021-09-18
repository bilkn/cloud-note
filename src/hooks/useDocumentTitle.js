import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import * as ROUTES from "../constants/routes";

export default function useDocumentTitle() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const prefix = " - CloudNote";
    let title = "";

    const changeTitle = () => {
      if (/\/greeting\/.*/.test(pathname)) {
        title = "Hello";
      } else {
        switch (pathname) {
          case ROUTES.HOME:
            title = "CloudNote";
            break;
          case ROUTES.DELETED:
            title = "Deleted Notes";
            break;
          case ROUTES.ACCOUNT:
            title = "Account Settings";
            break;
          case ROUTES.ACCOUNT + ROUTES.PROFILE:
            title = "Edit Profile";
            break;
          case ROUTES.ACCOUNT + ROUTES.PASSWORD:
            title = "Change Password";
            break;
          case ROUTES.SIGN_IN:
            title = "Sign In";
            break;
          case ROUTES.SIGN_UP:
            title = "Sign Up";
            break;
          case ROUTES.PASSWORD_RESET:
            title = "Forgot Password";
            break;
          default:
            title = "404 Not Found";
            break;
        }
      }
      if (title !== "CloudNote" && title !== "404 Not Found") {
        return (document.title = title + prefix);
      }
      document.title = title;
    };
    changeTitle();
  }, [pathname]);
}
