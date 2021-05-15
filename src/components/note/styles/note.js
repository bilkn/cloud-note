import styled, { css } from 'styled-components/macro';
import { shadows, colors, indexes } from '../../../styles/variables';
import {
  dotBeforeAnimation,
  dotAfterAnimation,
  scaleUp,
} from '../../../styles/animations';
import * as ROUTES from "../../../constants/routes"

const noteAnimation = () =>
  css`
    animation: ${scaleUp} 1.5s forwards;
  `;

const dotBeforeAnimationRule = css`
  animation: ${dotBeforeAnimation} 500ms forwards;
`;

const dotAfterAnimationRule = css`
  animation: ${dotAfterAnimation} 500ms forwards;
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

  &:disabled {
    color: #545454 !important;
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

export const Box = styled.div`
  background: white;
  border-radius: ${({ active }) => (active ? '0 0 25px 25px' : '25px')};
  display: flex;
  flex-direction: column;
  height: ${({ active, route }) =>
    active ? (route === ROUTES.HOME ? '205px' : '125px') : '0'};
  padding-top: 150%;
  position: absolute;
  transform: translateY(5px);
  transition: 500ms;
  transition-property: height, border-radius;
  overflow: hidden;
  width: ${({ active }) => (active ? '40px' : '0')};
`;

export const ButtonWrapper = styled.div`
  border: none;
  cursor: pointer;
  display: flex;
  height: 26px;
  justify-content: center;
  position: absolute;
  right: 25px;
  top: 10px;
  width: 21px;
  z-index: 1;
`;

export const Button = styled.button`
  background: none;
  color: ${colors.gray_4};
  padding: 0.5em;
  transition: background 100ms;
  outline: none;

  &:hover,
  &:focus {
    background: ${colors.gray_5_hover};
  }
`;

export const ToggleButton = styled.button`
  align-items: flex-end;
  background: none;
  display: flex;
  height: inherit;
  justify-content: center;
  margin: auto;
  width: inherit;

  &::before,
  &::after {
    background: ${colors.gray_4};
    border-radius: 50%;
    content: ' ';
    height: 5px;
    position: absolute;
    top: 13px;
    width: 5px;
    z-index: ${indexes.note_btn};
  }

  &::before {
    ${({ active }) => (active ? dotBeforeAnimationRule : '')};
    left: 0;
  }

  &::after {
    ${({ active }) => (active ? dotAfterAnimationRule : '')};
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
  transform: ${({ active }) =>
    active ? ' translateY(12px)' : 'translateY(-8px)'};
  transition: 300ms;
  transition-property: width, height, transform, background;
  width: ${({ active }) => (active ? '45px' : '5px')};
`;

export const Date = styled.p`
  bottom: 5px;
  left: 35px;
  position: absolute;
`;
