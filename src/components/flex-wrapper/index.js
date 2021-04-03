import React from 'react';
import { Container } from './styles/flex-wrapper';

function FlexWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FlexWrapper.defaultProps = {
  align: 'stretch',
  direction: 'row',
};

export default FlexWrapper;
