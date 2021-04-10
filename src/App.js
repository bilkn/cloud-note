import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Wrapper } from './components';
import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';
import devices from './devices';
import { Home, Account } from './pages';
import 'styled-components/macro';
function App() {
  return (
    <>
      <Router>
        <SidebarContainer />
        <HeaderContainer />
        <Switch>
          <Wrapper
            css={`
              @media ${devices.mobile} {
                margin-left: 90px;
              }
            `}
          >
            {/* <Home exact path="/" /> */}
            <Account path="/account" />
          </Wrapper>
        </Switch>
      </Router>
    </>
  );
}

export default App;
