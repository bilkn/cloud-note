import styled, { css } from 'styled-components/macro';
import { colors, indexes, shadows, sizes } from '../../../styles/variables';
import devices from '../../../styles/devices';
import { rotateSlideout } from '../../../styles/animations';

const animation = () =>
  css`
    animation: ${rotateSlideout} 3s forwards;
  `;

export const Container = styled.div`
  align-items: flex-start;
  background: ${colors.white_1};
  border-radius: 50%;
  bottom: 0;
  box-shadow: ${shadows.commonShadow};
  display: flex;
  flex-direction: row;
  height: 290px;
  gap: 20px; // !!! add support
  justify-content: center;
  left: 50%;
  margin-left: -145px;
  position: fixed;
  transform: ${(props) =>
    props.active ? 'translateY(25%)' : 'translateY(100%)'};
  transition: transform 0.5s;
  width: 290px;
  z-index: ${indexes.palette};

  @media ${devices.mobile} {
    ${(props) => (props.extraAnimation ? animation : '')};
    align-items: flex-end;
    flex-direction: column;
    height: 115px;
    gap: 7px;
    left: 25px;
    margin: initial;
    padding: 0.5em;
    transform: ${(props) =>
      props.active ? 'translateX(0)' : 'translateX(-100%)'};
    top: 86px;
    width: 115px;
  }
`;

export const ColorButton = styled.button`
  background: ${(props) => props.color};
  border-radius: 50%;
  height: 42px;
  position: relative;
  transition: transform 50ms;
  width: 42px;

  &:hover {
    transform: scale(1.1);
  }
  @media ${devices.mobile} {
    height: 12px;
    top: initial !important;
    width: 12px;
  }
`;

export const Span = styled.span`
  display: none;
  @media ${devices.mobile} {
    display: block;
    left: 10px;
    position: absolute;
    transform: rotate(180deg);
    user-select: none;
  }
`;
