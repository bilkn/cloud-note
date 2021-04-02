import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.aside`
  background: #e9ecf5;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
`;

export const Wrapper = styled.div``;

export const Nav = styled.nav``;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
`;

export const Item = styled.li``;

export const Button = styled.button`
  background: none;
  border: none;
  bottom: 20px;
  color: #515255;
  position: relative;
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: #f1554c;
  display: inline-block;
`;
