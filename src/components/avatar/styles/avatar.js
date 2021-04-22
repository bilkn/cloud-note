import styled from 'styled-components/macro';

export const Container = styled.div`
  background: gray;
  border-radius: 15px;
  flex-shrink: 0;
  height: ${(props) => props.size + 'px'};
  margin-right: 2em;
  width: ${(props) => props.size + 'px'};
`;

export const Picture = styled.img`
  border-radius: inherit;
  display: block;
  height: inherit;
  object-fit: cover;
  user-select: none;
  width: inherit;
`;

export const Button = styled.button`
  border-radius: 5px;
  height: ${(props) => props.size + 'px'};
  position: relative;
  transition: box-shadow 50ms;
  outline: none;
  width: ${(props) => props.size + 'px'};

  &:hover {
    box-shadow: 0 0 0 2pt #b6b6b6;
  }
  &:focus {
    box-shadow: 0 0 0 2pt #b6b6b7;
  }
`;
