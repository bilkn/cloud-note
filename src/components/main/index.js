import React from 'react';
import { Container, Wrapper, Note } from './styles/main';

function Main({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Wrapper = function MainWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Main.Note = function MainNote({ children, ...restProps }) {
  return <Note {...restProps}>{children}</Note>;
};

export default Main;
