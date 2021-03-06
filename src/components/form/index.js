import React from 'react';
import {
  Container,
  Wrapper,
  Box,
  Input,
  Label,
  Fieldset,
  Text,
  Textarea,
  Button,
  ButtonBlue,
  ButtonLink,
  Title,
  Subtitle,
  Line,
  Divider,
  PasswordStrength,
  Span,
  Error
} from './styles/form';

export default function Form({ children, ...restProps }) {
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

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Textarea = function FormTextarea({ children, ...restProps }) {
  return <Textarea {...restProps}>{children}</Textarea>;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.ButtonBlue = function FormButtonBlue({ children, ...restProps }) {
  return <ButtonBlue {...restProps}>{children}</ButtonBlue>;
};

Form.ButtonLink = function FormButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Subtitle = function FormSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Form.Line = function FormLine({ ...restProps }) {
  return <Line {...restProps} />;
};

Form.Divider = function FormDivider({ ...restProps }) {
  return <Divider {...restProps} />;
};

Form.Span = function FormSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Form.PasswordStrength = function FormPasswordStrength({ ...restProps }) {
  return <PasswordStrength {...restProps} />;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
