import React from 'react';
import { Container, List, Item, Input } from './styles/menu';

export default function Menu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Menu.List = function MenuList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Menu.Item = function MenuItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Menu.Input = function MenuInput({ ...restProps }) {
  return <Input {...restProps} />;
};
