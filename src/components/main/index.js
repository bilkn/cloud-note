import React from 'react';
import { Container, Wrapper} from './styles/main';

export default function Main({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Wrapper = function MainWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};



