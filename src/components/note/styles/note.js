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

export const Button = styled.button`
  background: none; 
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Span = styled.span`
  background: black;
  border-radius: 50%;
  height: 5px;
  margin-right: 5px;
  width: 5px;
`;
