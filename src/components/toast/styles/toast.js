import styled from 'styled-components/macro';
import { indexes } from '../../../styles/variables';

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
  width: 300px;
  z-index: ${indexes.poppedUI};
`;

export const Text = styled.p``;

export const Loader = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: none;
  color: white;
  font-size: 0.8rem;
  height: 20px;
  left: 50%;
  margin-left: -10px;
  margin-top: -10px;
  position: absolute;
  top: 50%;
  width: 20px;
`;

export const SVG = styled.svg`
  height: 40px;
  transform: rotateZ(-90deg);
  width: 40px;
`;

export const Circle = styled.circle`
  fill: #ffffff17;
  stroke: #000;
  stroke-dasharray: 94;
  stroke-dashoffset: 94;
  stroke-width: 2;
  transform: translate(5px, 5px);
`;
