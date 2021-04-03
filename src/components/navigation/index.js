import React from 'react';
import {
  Container,
  Breadcrumb,
  Link,
  Menu,
  MenuItem,
  Span
} from './styles/navigation';

function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Breadcrumb = function NavigationBreadcrumb({
  children,
  ...restProps
}) {
  return <Breadcrumb {...restProps}>{children}</Breadcrumb>;
};

Navigation.Link = function NavigationLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Navigation.Menu = function NavigationMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Navigation.MenuItem = function NavigationMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navigation.Span = function NavigationSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

export default Navigation;
