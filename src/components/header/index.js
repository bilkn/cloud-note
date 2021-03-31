import React from 'react';
import { Container, Box, SearchBox, Profile, Icon } from './styles/header';

function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Box = function HeaderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
Header.SearchBox = function HeaderSearchBox({ children, ...restProps }) {
  return <SearchBox {...restProps}>{children}</SearchBox>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

export default Header;
