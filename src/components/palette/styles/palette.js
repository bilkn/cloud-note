import styled, { css } from 'styled-components/macro';
import { colors, indexes, shadows } from '../../../styles/variables';
import { rotateSlideout } from '../../../styles/animations';

const animation = () =>
  css`
    animation: ${rotateSlideout} 3s forwards;
  `;

export const Container = styled.div`
  ${(props) => (props.extraAnimation ? animation : '')};
  align-items: flex-end;
  background: ${colors.white_1};
  border-radius: 50%;
  box-shadow: ${shadows.commonShadow};
  display: flex;
  flex-direction: column;
  gap: 7px; // !!! add support
  height: 115px;
  justify-content: center;
  left: 25px;
  padding: 0.5em;
  position: fixed;
  transform: ${(props) =>
    props.active ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s;
  top: 86px;
  width: 115px;
  z-index: ${indexes.palette};
`;

export const ColorButton = styled.button`
  background: ${(props) => props.color};
  border-radius: 50%;
  height: 12px;
  position: relative;
  transition: transform 50ms;
  width: 12px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Span = styled.span`
  display: block;
  left: 10px;
  position: absolute;
  transform: rotate(180deg);
  user-select: none;
`;
