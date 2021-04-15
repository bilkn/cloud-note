import styled, { css } from 'styled-components/macro';
import { shadows, colors } from '../../../styles/variables';
import { scaleUp } from '../../../styles/animations';

const noteAnimation = (props) =>
  css`
    animation: ${scaleUp} 1.5s forwards;
  `;

export const Container = styled.main`
  margin-top: 72px;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 2.5em;
`;

export const Note = styled.div`
  ${(props) => (props.date ? noteAnimation : '')}
  background: ${(props) => props.color || colors.red_2};
  border-radius: 20px;
  box-shadow: ${shadows.commonShadow};
  height: 0;
  padding: 1.2em;
  padding-bottom: 75%;
`;
