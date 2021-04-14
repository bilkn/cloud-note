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
  @media ${devices.tablet} {
    top: 0;
    height: 100vh;
    width: ${sizes.sidebar_width};
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 7em 0;
  }
`;

export const Box = styled.div``;

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  @media ${devices.tablet} {
    margin: auto;
    &::before {
      background: ${colors.red};
      content: '  ';
      height: 90px;
      left: 0;
      position: absolute;
      top: 0;
      width: 5px;
      transform: ${(props) => `translateY(${props.translateY}px)`};
    }
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const Item = styled.li`
  @media ${devices.tablet} {
    background: ${(props) => (props.active ? colors.gray_1_active : 'none')};
    height: 90px;
    transition: ${transitions.btnBgHover};
  }
  &:hover {
    background: ${colors.gray_1_hover};
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #515255;
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  color: ${colors.red};
  display: flex;
  justify-content: center;
  padding: 1em;
  height: 100%;
  width: 100%;
`;
