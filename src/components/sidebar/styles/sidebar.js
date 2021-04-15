import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import devices from '../../../styles/devices';
import {
  colors,
  indexes,
  sizes,
  transitions,
  shadows,
} from '../../../styles/variables';

export const Container = styled.aside`
  background: #e9ecf5;
  bottom: 0;
  box-shadow: ${shadows.commonShadow};
  left: 0;
  position: fixed;
  width: 100%;
  z-index: ${indexes.nav};
  @media ${devices.mobile} {
    top: 0;
    height: 100vh;
    width: ${sizes.sidebar_width};
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  @media ${devices.mobile} {
    flex-direction: column;
    padding: 7em 0;
  }
`;

export const Box = styled.div``;

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  @media ${devices.mobile} {
    margin: auto;
    &::before {
      background: ${colors.red};
      content: '  ';
      display: ${(props) => (props.active ? 'initial' : 'none')};
      height: 90px;
      left: 0;
      position: absolute;
      transition: transform 200ms;
      top: 0;
      width: 5px;
      transform: ${(props) => `translateY(${props.translateY}px)`};
    }
  }
`;

export const List = styled.ul`
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  @media ${devices.mobile} {
    flex-direction: column;
    padding: 0;
  }
`;

export const Item = styled.li`
  background: none;
  color: ${(props) => (props.active ? colors.red : '#4949497a')};
  @media ${devices.mobile} {
    background: ${(props) => (props.active ? colors.gray_1_active : 'none')};
    color: ${colors.red};
    height: 90px;
    transition: ${transitions.btnBgHover};
    &:hover {
      background: ${colors.gray_1_hover};
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #515255;
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  color: inherit;
  display: flex;
  justify-content: center;
  padding: 1em;
  height: 100%;
  width: 100%;
`;
