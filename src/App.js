import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  DialogContainer,
  HeaderContainer,
  SidebarContainer,
  ToastContainer,
} from './containers';
import { Home, Deleted, Account, Signin, Signup, PasswordReset } from './pages';
import {
  DataProvider,
  DialogProvider,
  ToastProvider,
  FirebaseAuthProvider,
} from './providers';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <>
      <DialogProvider>
        <ToastProvider>
          <DataProvider>
            <FirebaseAuthProvider>
              <Router>
                <HeaderContainer />
                <Switch>
                  <Route path={ROUTES.HOME} exact>
                    <Home />
                  </Route>
                  <Route path={ROUTES.DELETED}>
                    <Deleted />
                  </Route>
                  <Route path={ROUTES.ACCOUNT}>
                    <Account />
                  </Route>
                  <Route path={ROUTES.SIGN_IN}>
                    <Signin />
                  </Route>
                  <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                  </Route>
                  <Route path={ROUTES.PASSWORD_RESET}>
                    <PasswordReset />
                  </Route>
                </Switch>
                <SidebarContainer />
              </Router>
              <DialogContainer />
            </FirebaseAuthProvider>
          </DataProvider>
          <ToastContainer />
        </ToastProvider>
      </DialogProvider>
    </>
  );
}

export default App;
