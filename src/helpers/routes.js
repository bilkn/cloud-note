import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useFirebaseAuth } from '../hooks';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ loggedInPath, children, ...rest }) {
  const { currentUser } = useFirebaseAuth();
  return (
    <Route
      {...rest}
      render={() => {
        if (!currentUser) {
          return children;
        }

        if (currentUser) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, ...rest }) {
  const { currentUser } = useFirebaseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (currentUser) {
          return children;
        }

        if (!currentUser) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
