import styled from 'styled-components/macro';
import {colors, indexes,transitions} from "../../../styles/variables";

export const Container = styled.div`
  background: #f7f9fa;
  border-radius: 10px;
  left: 50%;
  padding: 1.25em 1.5em;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: ${indexes.poppedUI};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: black;
  font-size: 1.1rem;
  margin-bottom: 2em;
  text-align: center;
`;

export const Button = styled.button`
  background: ${colors.white_1};
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(241, 85, 76, 0.25);
  color: ${colors.red};
  font-size: 1.2rem;
  padding: 0.3em 0;
  text-align: center;
  transition: ${transitions.buttonBgHover};
  width: 100px;
  &:hover {
    background: ${colors.white_1_hover};
  }
`;


