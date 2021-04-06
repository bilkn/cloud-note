import React from 'react';
import {
  Container,
  Wrapper,
  Box,
  Input,
  Label,
  Fieldset,
  Button,
  ButtonRed,
  Subtitle,
  Line,
} from './styles/form';

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Form.Box = function FormBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.Fieldset = function FormFieldset({ children, ...restProps }) {
  return <Fieldset {...restProps}>{children}</Fieldset>;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.ButtonRed = function FormButtonRed({ children, ...restProps }) {
  return <ButtonRed {...restProps}>{children}</ButtonRed>;
};

Form.Subtitle = function FormSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Form.Line = function FormLine({ ...restProps }) {
  return <Line {...restProps} />;
};

export default Form;
