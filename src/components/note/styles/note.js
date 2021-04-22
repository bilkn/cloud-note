import styled, { css } from 'styled-components/macro';
import { shadows, colors } from '../../../styles/variables';
import { scaleUp } from '../../../styles/animations';

const noteAnimation = () =>
  css`
    animation: ${scaleUp} 1.5s forwards;
  `;

export const Container = styled.div`
  ${(props) => (props.animate ? noteAnimation : '')}
  background: ${(props) => props.color || colors.red_2};
  border-radius: 20px;
  box-shadow: ${shadows.commonShadow};
  padding: 2em 1.2em;
  position: relative;
`;

export const TextArea = styled.textarea`
  background: none;
  border: none;
  height: 0;
  padding-bottom: 75%;
  resize: none;
  outline: none;
  overflow: hidden;
  width: 100%;
`;

export const Button = styled.button`
  align-items: center;
  background: ${colors.gray_4};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 7px;
  justify-content: center;
  left: 0;
  margin-right: 5px;
  position: absolute;
  transition: 300ms;
  transition-property: transform, width, height;
  outline: none;
  width: 7px;
`;

export const Box = styled.div`
  align-items: center;
  background: none;
  color: ${colors.gray_4};
  cursor: pointer;
  display: flex;
  height: 24px;
  position: absolute;
  right: 15px;
  top: 5px;
  outline: none;
  width: 40px;

  &:focus {
    color: ${({ mouseClick }) => (mouseClick ? '' : 'whitesmoke')};
  }

  &:focus Button {
    background: ${({ active, mouseClick }) =>
      active ? colors.gray_4 : mouseClick ? colors.gray_4 : 'whitesmoke'};
  }
`;
