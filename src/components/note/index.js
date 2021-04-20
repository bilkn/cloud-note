import React from 'react';
import { Container, TextArea, Box, Button } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.TextArea = function NoteTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

Note.Box = function NoteButton({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Note.Button = function NoteButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
