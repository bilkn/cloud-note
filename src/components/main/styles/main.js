import styled from 'styled-components/macro';
import { shadows, colors } from '../../../styles/variables';

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
  background: ${props=> props.color || colors.orange};
  border-radius: 20px;
  box-shadow: ${shadows.commonShadow};
  height:0;
  padding: 1.2em;
  padding-bottom: 75%;
`;
