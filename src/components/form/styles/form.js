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
  border: none;
  border-radius: 8px;
  margin-top: 7px;
  padding: 0.7em 1em;
  vertical-align: baseline;
  width: 100%;
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
  background: #dcdcdc;
  border-radius: 5px;
  margin-top: 1.5em;
  padding: 0.625em 1em;
`;

export const ButtonRed = styled(Button)`
  background: ${colors.red};
  color: white;
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: #4f3cc9;
  margin-top: 1.5em;
`;

export const Title = styled.h2``

export const Subtitle = styled.h3`
  margin-top: 1.3em;
  text-transform: capitalize;
`;

export const Line = styled.hr`
  background: #dbdbde;
  border: 0;
  height: 1px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #b6b6b6;
  color: #6e6d7a;
  display: block;
  height: 0;
  text-align: center;
  margin-top: 2em;
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
