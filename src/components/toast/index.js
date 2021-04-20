import React from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Loader,
  SVG,
  Circle,
} from './styles/toast';
import 'styled-components/macro';
import { toastLoader } from '../../styles/animations';

export default function Toast({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Toast.Content = function ToastContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Toast.Text = function ToastText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Toast.Button = function ToastButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Toast.Loader = function ToastLoader({
  children,
  duration,
  onAnimationEnd,
  id,
  ...restProps
}) {
  Loader.defaultProps = {
    duration: '500',
  };
  return (
    <Loader {...restProps}>
      {children}
      <SVG>
        <Circle
          cx="15"
          cy="15"
          r="15"
          css={`
            stroke-dashoffset: 0;
            stroke: transparent;
          `}
        />
        <Circle
          cx="15"
          cy="15"
          r="15"
          css={`
            animation: ${toastLoader} linear ${duration + 'ms'} forwards;
            stroke: #fff;
            stroke-dashoffset: calc(94 - (94 * 0) / 100);
          `}
          onAnimationEnd={()=> onAnimationEnd(id)}
        />
      </SVG>
    </Loader>
  );
};
