import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { colors } from '../../../styles/variables';
import devices from '../../../styles/devices';

export const Container = styled.div``;

export const Breadcrumb = styled.nav``;

export const Menu = styled.ul`
  background: #e9ecf5;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: none;
  flex-basis: 300px;
  flex-direction: column;
  margin-right: 3em;
  padding: 1em;
  @media ${devices.mobile} {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  background: ${(props) => (props.active ? 'white' : 'none')};
  border-top-right-radius: ${(props) => (props.active ? '25px' : 'none')};
  border-bottom-right-radius: ${(props) => (props.active ? '25px' : 'none')};
  box-shadow: ${(props) => (props.active ? '3px 3px 30px #0000001a' : 'none')};
  color: white;
  position: relative;
  &::before {
    background: ${colors.red};
    content: '';
    display: ${(props) => (props.active ? 'initial' : 'none')};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 5px;
  }
`;

export const Link = styled(ReactRouterLink)`
  color: ${colors.red};
  font-size: 2rem;
`;

export const MenuLink = styled(ReactRouterLink)`
  color: black;
  display: block;
  padding: 0.8em 0.2em;
  padding-left: ${(props) => (props.active ? '0.8em' : '0')};
`;

export const Text = styled.p`
  font-size: 1.875rem;
  display: inline;
`;

export const Span = styled.span`
  color: #dcdcdc;
  font-size: 2rem;
  margin: 0 0.5em;
  user-select: none;
`;
