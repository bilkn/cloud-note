import styled from 'styled-components/macro';

export const Container = styled.div`
  background: whitesmoke;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const List = styled.ul`
  border-radius: inherit;
`;

export const Item = styled.li`
  border-bottom: 1px solid #dededeba;
  &:hover {
    background: #e4e4e4;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: inherit;
  border-radius: inherit;
  border: none;
  display: flex;
  font-size: 1.3rem;
  padding: 0.8em 1.5em;
  transition: background 100ms;
  width: 100%;
`;

export const Icon = styled.i`
  margin-right: 10px;
`;
