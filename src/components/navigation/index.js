import React from 'react';
import {
  Container,
  Breadcrumb,
  Link,
  Menu,
  MenuItem,
  MenuLink,
  Text,
  Span
} from './styles/navigation';

export default function Navigation({ children, ...restProps }) {
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

Navigation.MenuLink = function NavigationMenuLink({ children, ...restProps }) {
  return <MenuLink {...restProps}>{children}</MenuLink>;
};

Navigation.Text = function NavigationText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Navigation.Span = function NavigationSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

