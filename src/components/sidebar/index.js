import React from 'react';

import {
  Container,
  Wrapper,
  Nav,
  List,
  Item,
  Button,
  ButtonLink,
} from './styles/sidebar';

function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
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
  return (
    <Item>
      <Button {...restProps}>{children}</Button>
    </Item>
  );
};

Sidebar.ButtonLink = function SideBarButtonLink({ children, ...restProps }) {
  return (
    <Item>
      <ButtonLink to="/" {...restProps}>
        {children}
      </ButtonLink>
    </Item>
  );
};

export default Sidebar;
