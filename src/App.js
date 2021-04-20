import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderContainer, SidebarContainer, ToastContainer } from './containers';
import { Home, Account, Signin, Signup, PasswordReset } from './pages';
import { DataProvider } from './providers';

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <HeaderContainer />
          <Switch>
            <Route path="/" exact>
              <Home />
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
      </DataProvider>
      <ToastContainer />
    </>
  );
}

export default App;
