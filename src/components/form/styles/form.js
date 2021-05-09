import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { colors } from '../../../styles/variables';

export const Container = styled.form`
  width: 100%;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div``;

export const Input = styled.input`
  background: #e5e5e5;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-top: 7px;
  padding: 0.7em 1em;
  transition-duration: 200ms;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease;
  outline: none;
  vertical-align: baseline;
  width: 100%;
  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 4px #49494917;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin-top: 1.5em;
  padding: 0;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 0.625rem;
  margin: 4px 0;
`;

export const Textarea = styled(Input)``;

export const Button = styled.button`
  background: ${({ variant }) =>
    variant === 'red' ? colors.red : colors.gray_2};
  border-radius: 5px;
  color: ${({ variant }) => (variant === 'red' ? 'white' : 'inherit')};
  margin-top: 1.5em;
  padding: 0.625em 1em;
  transition: background 50ms;
  outline: none;
  &:hover,
  &:focus {
    background: ${({ variant }) =>
      variant === 'red' ? colors.red_hover_2 : colors.gray_2_hover};
  }
`;

export const ButtonBlue = styled(Button)`
  align-items: center;
  background: ${colors.blue_2};
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  &:hover,
  &:focus {
    background: ${colors.blue_2_hover};
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: #4f3cc9;
  margin-top: 1.5em;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Title = styled.h2``;

export const Subtitle = styled.h3`
  margin-top: 1.3em;
  text-transform: capitalize;
`;

export const Line = styled.hr`
  background: #dbdbde;
  border: 0;
  height: 1px;
  margin-top: 1em;
  width: 100%;
`;

export const Divider = styled.hr`
  border-top: 1px solid #b6b6b6;
  color: #6e6d7a;
  display: block;
  height: 0;
  margin-top: 2em;
  text-align: center;
  ::after {
    background: #f3f5fb;
    content: 'Or';
    padding: 0 1em;
    position: relative;
    top: -9px;
  }
  width: 100%;
`;

export const Span = styled.span`
  color: ${colors.red};
  display: inline-block;
  padding-left: 3px;
`;

export const PasswordStrength = styled.div`
  height: 3px;
  width: 100px;

  &::after {
    background: ${({ strength }) =>
      strength === 'strong'
        ? colors.strongPassword
        : strength === 'medium'
        ? colors.mediumPassword
        : colors.weakPassword};
    content: '';
    display: block;
    height: 100%;
    transition: width 300ms;
    width: ${({ strength }) =>
      strength === 'strong' ? '100%' : strength === 'medium' ? '50%' : '25%'};
  }
`;

export const Error = styled.p`
  color: red;
  line-height: 2;
`
