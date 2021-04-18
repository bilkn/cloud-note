import React from 'react';
import { Container, Button, Span } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.Button = function NoteButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Note.Span = function NoteSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
