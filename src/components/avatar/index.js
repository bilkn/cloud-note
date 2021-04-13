import React from 'react';
import { Container, Picture, ButtonLink } from './styles/avatar';

export default function Avatar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Avatar.Picture = function AvatarPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Avatar.ButtonLink = function AvatarButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Avatar.defaultProps = {
  size: '24px',
};
