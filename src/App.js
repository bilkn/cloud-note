import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  DialogContainer,
  HeaderContainer,
  SidebarContainer,
  ToastContainer,
} from './containers';
import { Home, Deleted, Account, Signin, Signup, PasswordReset } from './pages';
import { DataProvider, DialogProvider, ToastProvider } from './providers';

function App() {
  return (
    <>
      <DialogProvider>
        <ToastProvider>
          <DataProvider>
            <Router>
              <HeaderContainer />
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/deleted">
                  <Deleted />
                </Route>
                <Route path="/account">
                  <Account />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/password_reset">
                  <PasswordReset />
                </Route>
              </Switch>
              <SidebarContainer />
            </Router>
            <DialogContainer />
          </DataProvider>
          <ToastContainer />
        </ToastProvider>
      </DialogProvider>
    </>
  );
}

export default App;
