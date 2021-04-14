import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Account, Signin, Signup, PasswordReset } from './pages';
import {DataProvider} from "./providers"; 

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <DataProvider>
            <Home />
            </DataProvider>
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
      </Router>
    </>
  );
}

export default App;
