import React from 'react';

import { Container, Wrapper, Nav } from './styles/sidebar';

function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Wrapper = function ({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Nav = function ({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

export default Sidebar;
