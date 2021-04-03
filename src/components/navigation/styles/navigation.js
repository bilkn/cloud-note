import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div``;

export const Breadcrumb = styled.nav``;

export const Menu = styled.ul`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid #eee;
`;

export const Link = styled(ReactRouterLink)`
  color: #f1554c;
  font-size: 2rem;
`;

export const MenuLink = styled(ReactRouterLink)`
  align-items: center;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0.875em 1.25em;
  width: 100%;
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
