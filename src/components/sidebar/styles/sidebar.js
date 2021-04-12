import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import devices from '../../../styles/devices';
import { colors } from '../../../styles/variables';

export const Container = styled.aside`
  background: #e9ecf5;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  @media ${devices.tablet} {
    top: 0;
    height: 100vh;
    width: 90px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  @media ${devices.tablet} {
    height: min-content;
    margin: auto;
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.li``;

export const Button = styled.button`
  background: none;
  border: none;
  color: #515255;
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: ${colors.red};
  display: inline-block;
  padding: 1em;
`;
