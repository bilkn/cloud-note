import React from "react"
import { Palette } from "../components"
import { colors } from '../styles/variables';
import 'styled-components/macro';

export default function PaletteContainer({palette, setPalette}) {

     const handleColorClick = () => {
       setPalette({ active: false, extraAnimation: true });
     };

     const handleExtraAnimationEnd = () => {
       console.log('end');
       setPalette({ active: false, extraAnimation: false });
     };

    return (<Palette
        active={palette.active}
        extraAnimation={palette.extraAnimation}
        onAnimationEnd={handleExtraAnimationEnd}
      >
        <Palette.Span>&#128578;</Palette.Span>
        <Palette.ColorButton
          color={colors.orange}
          css={`
            right: 22px;
            top: 5px;
          `}
          onClick={handleColorClick}
        />
        <Palette.ColorButton
          color={colors.yellow}
          css={`
            right: 8px;
          `}
        />
        <Palette.ColorButton color={colors.purple} />
        <Palette.ColorButton
          color={colors.blue}
          css={`
            right: 8px;
          `}
        />
        <Palette.ColorButton
          color={colors.green}
          css={`
            right: 22px;
            bottom: 5px;
          `}
        />
      </Palette>)
}