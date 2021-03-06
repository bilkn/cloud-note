import React from 'react';

import {
  Container,
  Wrapper,
  Box,
  Nav,
  List,
  Item,
  Button,
  ButtonLink,
} from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Box = function SidebarBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Sidebar.Nav = function SidebarNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Sidebar.List = function SidebarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Sidebar.Item = function SidebarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Sidebar.Button = function SidebarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Sidebar.ButtonLink = function SideBarButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
