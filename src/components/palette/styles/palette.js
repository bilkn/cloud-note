import styled from 'styled-components/macro';
import { colors, indexes, shadows } from '../../../styles/variables';

export const Container = styled.div`
  align-items: flex-end;
  background: ${colors.white_1};
  box-shadow: ${shadows.commonShadow};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px; // !!! add support
  height: 115px;
  left: 25px;
  padding: 0.5em;
  position: fixed;
  top: 90px;
  width: 115px;
  z-index: ${indexes.palette};
`;

export const ColorButton = styled.button`
  background: ${(props) => props.color};
  border-radius: 50%;
  height: 12px;
  position: relative;
  width: 12px;
`;
