import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  DialogContainer,
  HeaderContainer,
  SidebarContainer,
  ToastContainer,
} from './containers';
import {
  DataProvider,
  DialogProvider,
  ToastProvider,
  FirebaseAuthProvider,
} from './providers';
import { Loader } from './components';
import * as ROUTES from './constants/routes';
import { NotFound } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

const Home = React.lazy(() => import('./pages/home'));
const Deleted = React.lazy(() => import('./pages/deleted'));
const Account = React.lazy(() => import('./pages/account'));
const Signin = React.lazy(() => import('./pages/signin'));
const Signup = React.lazy(() => import('./pages/signup'));
const PasswordReset = React.lazy(() => import('./pages/password-reset'));

function App() {
  return (
    <>
      <FirebaseAuthProvider>
        <DialogProvider>
          <ToastProvider>
            <DataProvider>
              <Router>
                <HeaderContainer />
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route path={ROUTES.HOME} exact>
                      <Home />
                    </Route>
                    <Route path={ROUTES.DELETED}>
                      <Deleted />
                    </Route>
                    <ProtectedRoute path={ROUTES.ACCOUNT}>
                      <Account />
                    </ProtectedRoute>
                    <IsUserRedirect
                      loggedInPath={ROUTES.HOME}
                      path={ROUTES.SIGN_IN}
                    >
                      <Signin />
                    </IsUserRedirect>
                    <IsUserRedirect
                      loggedInPath={ROUTES.HOME}
                      path={ROUTES.SIGN_UP}
                    >
                      <Signup />
                    </IsUserRedirect>
                    <IsUserRedirect
                      loggedInPath={ROUTES.HOME}
                      path={ROUTES.PASSWORD_RESET}
                    >
                      <PasswordReset />
                    </IsUserRedirect>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                </Suspense>
                <SidebarContainer />
              </Router>
              <DialogContainer />
            </DataProvider>
            <ToastContainer />
          </ToastProvider>
        </DialogProvider>
      </FirebaseAuthProvider>
    </>
  );
}

export default App;
