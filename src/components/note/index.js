import React from 'react';
import { Container, Box, Button } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.Box = function NoteButton({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Note.Button = function NoteButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

