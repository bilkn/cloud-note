import React from 'react';
import { Container, TextArea, Box, Button } from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.TextArea = React.forwardRef((props, ref) => (
  <TextArea ref={ref} {...props} />
));

Note.Box = function NoteButton({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Note.Button = function NoteButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
