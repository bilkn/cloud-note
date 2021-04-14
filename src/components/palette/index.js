import React from 'react';
import {Container, ColorButton, Span} from "./styles/palette";

export default function Palette({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Palette.ColorButton = function PaletteColorButton({ children, ...restProps }) {
  return <ColorButton {...restProps}>{children}</ColorButton>;
};

Palette.Span = function PaletteSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
