import styled from 'styled-components/macro';
import { indexes, sizes } from '../../../styles/variables';
import devices from '../../../styles/devices';

export const Container = styled.div`
  align-items: center;
  background: #7d6fcd;
  border-radius: 5px;
  box-shadow: 0 2px 10px #0000002e;
  color: white;
  display: flex;
  height: 50px;
  justify-content: space-between;
  left: 50%;
  margin-left: -150px;
  padding: 0.5em 1em;
  position: fixed;
  top: 60px;
  width: 300px;
  z-index: ${indexes.poppedUI};
  @media ${devices.mobile} {
    margin-left: ${`calc(${sizes.sidebar_width} / 2 - 150px)`};
  }
`;

export const Text = styled.p``;

export const Loader = styled.div`
  position: relative;
`;

export const Circle = styled.circle`
  fill: #ffffff17;
  stroke: #000;
  stroke-dasharray: 94;
  stroke-dashoffset: 94;
  stroke-width: 2;
  transform: translate(5px, 5px);
  transition: fill 100ms;
`;

export const SVG = styled.svg`
  height: 40px;
  transform: rotateZ(-90deg);
  width: 40px;
`;

export const Button = styled.button`
  background: none;
  color: white;
  font-size: 0.8rem;
  height: 30px;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  position: absolute;
  top: 50%;
  width: 30px;
  z-index: ${indexes.toast_btn};
  &:hover + SVG Circle {
    fill: #ffffff33;
  }
  &:focus {
    outline: none;
  }
  &:focus + SVG Circle {
    fill: #ffffff33;
  }
`;
