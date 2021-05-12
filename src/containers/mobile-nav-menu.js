import React, { useState } from 'react';
import { MobileNav } from '../components';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';
import { Tick } from '@styled-icons/typicons/Tick';
import NavLinks from '../fixtures/navigation-links.json';
import { useRouteMatch } from 'react-router';
import { useMatchLastSubpath } from '../hooks';

export default function MobileNavMenuContainer() {
  const { url } = useRouteMatch();
  const { matchSubpath } = useMatchLastSubpath();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <MobileNav.Menu onClick={handleMenuClick}>
      {NavLinks.map(
        ({ path, name }, i) =>
          (matchSubpath(path) || showMenu) && (
            <MobileNav.MenuItem
              key={path}
              active={matchSubpath(path) ? 1 : 0}
              onClick={handleMenuClick}
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
