import React from 'react';
import { Container, Grid} from './styles/main';

export default function Main({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Grid = function MainGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};



