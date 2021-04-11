import styled from 'styled-components/macro';
import devices from '../../../devices';

export const Container = styled.header`
  background: #e9ecf5;
  left: 0;
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media ${devices.tablet} {
    background: none;
    margin-left: 90px;
    width: calc(100% - 90px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Box = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const SearchBox = styled.div`
  flex: 1;
  position: relative;
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  display: inline-block;
  padding: 10px;
  padding-left: 40px;
  width: 100%;
`;

export const Icon = styled.i`
  display: inline-block;
  left: 10px;
  position: absolute;
  top: 6px;
`;
