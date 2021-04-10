import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';
import { Home, Account, Signin, Signup } from './pages';

function App() {
  return (
    <>
      <Router>
        {/*  <SidebarContainer />
        <HeaderContainer /> */}
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
