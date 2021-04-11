import styled from 'styled-components/macro';

export const Container = styled.div`
  background: gray;
  border-radius: 10px;
  height: 130px;
  left: 50%;
  margin-top: -65px;
  margin-left: -115px;
  padding: 0.9rem;
  position: fixed;
  top: 50%;
  width: 230px;
  z-index: 100;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem;
`;

export const Text = styled.p`
  color: black;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Button = styled.button`
  background: #114b10c9;
  border-radius: 5px;
  color: #f3f3f3;
  font-size: 1.3rem;
  padding: 0.3rem 0;
  text-align: center;
  transition: background 100ms ease;
  width: 60px;
  &:hover {
    background: none;
  }
`;
