import React, { useState } from 'react';
import { MobileNav } from '../components';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';
import { Tick } from '@styled-icons/typicons/Tick';
import NavLinks from '../fixtures/navigation-links.json';
import { useRouteMatch } from 'react-router';
import { useMatchLastSubpath } from '../hooks';

export default function MobileNavMenuContainer({ setCrumb }) {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (e, name) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
    setCrumb(name);
  };

  return (
    <MobileNav.Menu>
      {NavLinks.map(
        ({ path, name }) =>
          (matchSubpath(path) || showMenu) && (
            <MobileNav.MenuItem
              key={path}
              active={matchSubpath(path) ? 1 : 0}
              onClick={(e) => handleMenuClick(e, name)}
            >
              <MobileNav.MenuLink to={`${url !== path ? url : ''}${path}`}>
                {name}
                {showMenu && matchSubpath(path) && (
                  <Tick color="black" size="18" />
                )}
                {!showMenu && <ChevronDown color="#CFCFCF" size="18" />}
              </MobileNav.MenuLink>
            </MobileNav.MenuItem>
          )
      )}
    </MobileNav.Menu>
  );
}
