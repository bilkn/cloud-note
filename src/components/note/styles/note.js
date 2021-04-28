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
  overscroll-behavior: contain;
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

  @supports (aspect-ratio: 4/3) {
    aspect-ratio: 4/3;
    height: initial;
    padding-bottom: 0;
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

export const Box = styled.div``;

export const ButtonWrapper = styled.div`
  border: none;
  cursor: pointer;
  display: flex;
  height: 5px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 21px;
`;

export const Button = styled.button``;

export const ToggleButton = styled.button`
  background: none;
  display: flex;
  height: inherit;
  justify-content: center;
  width: inherit;

  &::before,
  &::after {
    background: #515255;
    border-radius: 50%;
    content: ' ';
    height: 5px;
    position: absolute;
    top: 0;
    width: 5px;
    z-index: 10;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const Dot = styled.span`
  background: ${({ active }) => (active ? 'white' : '#515255')};
  border-radius: 50%;
  ${({ active }) =>
    active ? 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;' : ''};
  height: ${({ active }) => (active ? '45px' : '5px')};
  position: absolute;
  ${({ active }) => (active ? 'transform: translateY(-20px)' : '')};
  transition: 300ms;
  transition-property: width, height, transform, background;
  width: ${({ active }) => (active ? '45px' : '5px')};
`;
