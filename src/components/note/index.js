import React from 'react';
import { Container, Box, Span } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.Box = function NoteButton({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Note.Span = function NoteSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
