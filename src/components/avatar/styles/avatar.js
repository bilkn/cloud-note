import styled from 'styled-components/macro';

export const Container = styled.div`
  background: gray;
  border-radius: 15px;
  flex-shrink: 0;
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

export const Button = styled.button`
  border-radius: 5px;
  height: ${(props) => props.size + "px"};
  position: relative;
  width: ${(props) => props.size + "px"};
`;
