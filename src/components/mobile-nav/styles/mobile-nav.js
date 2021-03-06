import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { colors } from '../../../styles/variables';
import devices from '../../../styles/devices';

export const Container = styled.div``;

export const Menu = styled.ul`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid #eee;
  color: ${(props) => (props.active ? 'black' : colors.gray_3)};
  text-transform: capitalize;
  &:hover {
    color: #0000009e;
  }
`;

export const Link = styled(ReactRouterLink)`
  color: ${colors.red};
  font-size: 2rem;
`;

export const MenuLink = styled(ReactRouterLink)`
  align-items: center;
  color: inherit;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0.875em 1.25em;
  width: 100%;
`;
