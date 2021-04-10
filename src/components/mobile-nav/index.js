import React from "react"
import {Container} from "./styles/mobile-nav"
import {Link, Menu, MenuItem, MenuLink} from "./styles/mobile-nav"

export default function MobileNav({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

MobileNav.Link = function MobileNavLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

MobileNav.Menu = function MobileNavMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

MobileNav.MenuItem = function MobileNavMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

MobileNav.MenuLink = function MobileNavMenuLink({ children, ...restProps }) {
  return <MenuLink {...restProps}>{children}</MenuLink>;
};
