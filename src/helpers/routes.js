import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useFirebaseAuth } from '../hooks';

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

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
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
