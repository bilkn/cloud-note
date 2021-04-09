import React from 'react';
import { Container } from './styles/backdrop';

export default function Backdrop({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

