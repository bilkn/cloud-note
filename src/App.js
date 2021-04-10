import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper } from './components';
import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';
import devices from './devices';
import { Home, Account } from './pages';
import 'styled-components/macro';
import Signin from './pages/signin';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
