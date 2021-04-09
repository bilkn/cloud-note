import styled from 'styled-components/macro';

export const Container = styled.main`
  margin-top: 72px;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, 250px);
  padding: 2.5em;
`;

export const Note = styled.div`
  background: #fc9870;
  border-radius: 20px;
  height: 250px;
  padding: 1.2em;
`;
