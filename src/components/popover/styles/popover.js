import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 50px #0000002e;
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  width: 170px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  &:first-child {
    &::before {
      border-bottom: 6px solid white;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      content: '';
      height: 0;
      position: absolute;
      right: 14px;
      top: -5px;
      width: 0;
      z-index: 10;
    }
  }
  &:hover {
    background: rgba(13, 12, 34, 0.03);
  }
  &:hover&::before {
    border-bottom-color: rgb(247, 247, 248);
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: #000000a8;
  display: block;
  padding: 15px 10px;
`;

export const Line = styled.hr`
  border: 0;
  background: #dededeba;
  height: 1px;
`;
