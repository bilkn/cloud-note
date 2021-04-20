import React from 'react';
import { Container,Content, Box, Button } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.Content = function NoteContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Note.Box = function NoteButton({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Note.Button = function NoteButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

