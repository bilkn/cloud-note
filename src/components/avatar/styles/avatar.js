import styled from 'styled-components/macro';

export const Container = styled.div`
  background: gray;
  border-radius: 15px;
  height: ${(props) => props.size};
  margin-right: 2em;
  width: ${(props) => props.size};
`;

export const Picture = styled.img`
  border-radius: inherit;
  height: inherit;
  object-fit: cover;
  width: inherit;
`;
