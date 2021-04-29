import styled from 'styled-components/macro';
import { fadeIn } from '../../../styles/animations';
import { indexes } from '../../../styles/variables';

export const Container = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.2s ease;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  transition: opacity 300ms;
  top: 0;
  width: 100vw;
  z-index: ${indexes.backdrop};
`;
