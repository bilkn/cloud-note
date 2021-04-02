import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SidebarContainer from './containers/sidebar';
import Home from './pages/home';

function App() {
  return (
    <>
      <Router>
        <SidebarContainer />
        <Switch>
          <Home exact path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
