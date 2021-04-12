import styled from 'styled-components/macro';
import { fadeIn } from '../../../styles/animations';
import { indexes } from '../../../styles/variables';
export const Container = styled.div`
  animation: ${fadeIn} 0.2s ease;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  left: 0;
  position: fixed;
  transition: opacity 300ms ease;
  top: 0;
  width: 100vw;
  z-index: ${indexes.backdrop};
`;
