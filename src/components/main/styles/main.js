import styled from 'styled-components/macro';
import devices from '../../../styles/devices';

export const Container = styled.main`
  margin-top: 72px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 2.5em;

  @media ${devices.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
