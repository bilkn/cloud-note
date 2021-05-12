import React from 'react';
import { useRouteMatch } from 'react-router';
import { Navigation as Nav } from '../components';
import { useMatchLastSubpath } from '../hooks';
import NavLinks from '../fixtures/navigation-links.json';

export default function NavMenuContainer({ setCrumb }) {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();

  const handleClick = (name) => setCrumb(name);
  
  return (
    <Nav.Menu>
      {NavLinks.map(({ path, name }) => (
        <Nav.MenuItem key={path} active={matchSubpath(path) ? 1 : undefined}>
          <Nav.MenuLink
            to={`${url !== path ? url : ''}${path}`}
            active={matchSubpath(path) ? 1 : undefined}
            onClick={() => handleClick(name)}
          >
            {name}
          </Nav.MenuLink>
        </Nav.MenuItem>
      ))}
    </Nav.Menu>
  );
}
