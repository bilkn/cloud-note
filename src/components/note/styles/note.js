import styled, { css } from 'styled-components/macro';
import { shadows, colors } from '../../../styles/variables';
import { scaleUp } from '../../../styles/animations';

const noteAnimation = () =>
  css`
    animation: ${scaleUp} 1.5s forwards;
  `;

export const Container = styled.div`
  ${(props) => (props.date ? noteAnimation : '')}
  background: ${(props) => props.color || colors.red_2};
  border-radius: 20px;
  box-shadow: ${shadows.commonShadow};
  height: 0;
  padding: 1.2em;
  padding-bottom: 75%;
  position: relative;
`;

export const Box = styled.div`
  align-items: center;
  background: none;
  display: flex;
  position: absolute;
  height: 24px;
  right: 15px;
  top: 5px;
  outline: none;
`;

export const Span = styled.span`
  background: black;
  border-radius: 50%;
  height: 7px;
  margin-right: 5px;
  transition: transform 300ms;
  width: 7px;
`;
