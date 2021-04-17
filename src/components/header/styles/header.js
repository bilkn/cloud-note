import styled from 'styled-components/macro';
import devices from '../../../styles/devices';
import { indexes, shadows, sizes } from '../../../styles/variables';

export const Container = styled.header`
  background: #e9ecf5;
  box-shadow: ${shadows.commonShadow};
  left: 0;
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${indexes.nav};
  @media ${devices.mobile} {
    margin-left: ${sizes.sidebar_width};
    padding: 1em 2em;
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
  border: 1px solid transparent;
  border-radius: 20px;
  display: inline-block;
  padding: 10px;
  padding-left: 40px;
  transition-duration: 200ms;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease;
  outline: none;
  width: 100%;
  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 4px #49494917;
  }
  &:focus {
    border-color: rgb(241 85 76 / 50%);
    box-shadow: 0 0 0 4px #f1554c40;
  }
`;

export const Icon = styled.i`
  display: inline-block;
  left: 10px;
  position: absolute;
  top: 6px;
`;
