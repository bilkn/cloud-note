import React from 'react';
import { Container, Picture, Button } from './styles/avatar';

export default function Avatar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Avatar.Picture = function AvatarPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Avatar.Button = function AvatarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Avatar.defaultProps = {
  size: '24px',
};
