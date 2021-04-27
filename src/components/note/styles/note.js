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
  padding: 2em 1em;
  position: relative;
`;

export const TextArea = styled.textarea`
  background: none;
  border: none;
  height: 0;
  line-height: 1.4;
  padding: 0 1.2em;
  padding-bottom: 75%;
  resize: none;
  outline: none;
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  width: 100%;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e1f7;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.gray_3};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d3d3d3;
  }
`;

export const Title = styled.div`
  align-items: center;
  background: white;
  border-radius: 0 20px 20px 0;
  color: black;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 60%;
  position: absolute;
  ${({ active }) => (active ? 'transition: width 250ms;' : '')}
  top: 0;
  overflow: hidden;
  width: 0px;

  &:hover + span {
    ${({ active }) => (active ? 'box-shadow: 0 0 0 2px white' : '')};
  }
`;

export const ButtonWrapper = styled.div`
  height: 7px;
  left: 0;
  position: absolute;
  width: 7px;

  &:hover > div {
    ${({ active }) => (active ? ' width: 100px' : '')};
  }
`;

export const Button = styled.span`
  align-items: center;
  background: ${colors.gray_4};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  outline: none;
  width: 100%;

  &:hover {
    ${({ active }) => (active ? 'box-shadow: 0 0 0 2px white' : '')};
  }

  &:hover Title {
    ${({ active }) => (active ? ' width: max-content' : '')};
  }
`;

export const Box = styled.button`
  align-items: center;
  background: none;
  color: ${colors.gray_4};
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  position: absolute;
  right: 15px;
  top: 5px;
  outline: none;
  width: 40px;
  z-index: 5;

  &:focus {
    color: ${({ mouseClick }) => (mouseClick ? '' : 'whitesmoke')};
  }

  &:focus span {
    background: ${({ active, mouseClick }) =>
      active ? colors.gray_4 : mouseClick ? colors.gray_4 : 'whitesmoke'};
  }
`;
