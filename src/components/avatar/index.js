import React from 'react';
import { Container, Picture } from './styles/avatar';

export default function Avatar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Avatar.Picture = function AvatarPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Avatar.defaultProps = {
  size: '24px',
};
