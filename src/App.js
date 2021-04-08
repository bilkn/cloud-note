import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';
import {Home, Account} from './pages';

function App() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <SidebarContainer />
        <Switch>
           <Home exact path="/" /> 
         {/*  <Account  path="/account" /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
