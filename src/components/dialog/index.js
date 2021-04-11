import React from 'react';
import { Container, Box, Text, Button } from './styles/dialog';

export default function Dialog({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dialog.Box = function DialogBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Dialog.Text = function DialogText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Dialog.Button = function DialogButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
