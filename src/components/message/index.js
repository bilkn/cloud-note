import React from 'react';
import { Container, List, Item, Text } from './styles/message';

export default function Message({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Message.List = function MessageList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Message.Item = function MessageItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Message.Text = function MessageText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
