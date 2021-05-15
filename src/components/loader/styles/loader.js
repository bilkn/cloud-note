import styled from 'styled-components/macro';
import devices from '../../../styles/devices';
import { sizes } from '../../../styles/variables';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  @media ${devices.mobile} {
    margin-left: ${sizes.sidebar_width};
  }
`;

export const Wrapper = styled.div`
  margin: auto;
`;
