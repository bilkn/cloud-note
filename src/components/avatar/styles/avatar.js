import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  background: gray;
  border-radius: 15px;
  height: ${(props) => props.size + "px"};
  margin-right: 2em;
  width: ${(props) => props.size + "px"};
`;

export const Picture = styled.img`
  border-radius: inherit;
  display: block;
  height: inherit;
  object-fit: cover;
  width: inherit;
`;

export const ButtonLink = styled(ReactRouterLink)`
  border-radius: 5px;
  height: ${(props) => props.size + "px"};
  width: ${(props) => props.size + "px"};
`;
