import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
export const Container = styled.div``;

export const Breadcrumb = styled.nav``;

export const Menu = styled.ul``;

export const MenuItem = styled.li``;

export const Link = styled(ReactRouterLink)`
  color: #f1554c;
  font-size: 2rem;
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
