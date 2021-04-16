import React from 'react';
import { useRouteMatch } from 'react-router';
import { Navigation as Nav } from '../components';
import { useMatchLastSubpath } from '../hooks';
import NavLinks from '../fixtures/navigation-links.json';
import * as Routes from '../constants/routes';

export default function NavMenuContainer() {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();


  return (
    <Nav.Menu>
      {NavLinks.map(({ path, name }) => (
        <Nav.MenuItem active={matchSubpath(path)}>
          <Nav.MenuLink
            to={`${url !== path ? url : ''}${path}`}
            active={matchSubpath(path)}
          >
            {name}
          </Nav.MenuLink>
        </Nav.MenuItem>
      ))}
    </Nav.Menu>
  );
}
