import styled from 'styled-components/macro';

export const Container = styled.main`
  margin-top: 3em;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0 2.5em;
`;

export const Note = styled.div`
  background: #fc9870;
  border-radius: 20px;
  height: 250px;
  padding: 1.2em;
`;
