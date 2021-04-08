import React from 'react';
import { Container } from './styles/flex-wrapper';

export default function FlexWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FlexWrapper.defaultProps = {
  align: 'stretch',
  direction: 'row',
};


