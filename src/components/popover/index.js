import React from 'react';
import { Container, List, Item, ButtonLink, Line } from './styles/popover';

function Popover({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Popover.List = function PopoverList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Popover.Item = function PopoverItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Popover.ButtonLink = function PopoverButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Popover.Line = function PopoverLine({ ...restProps }) {
  return <Line {...restProps} />;
};

export default Popover;
