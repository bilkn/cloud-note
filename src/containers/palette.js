import React, { useContext } from 'react';
import { Palette } from '../components';
import { colors } from '../styles/variables';
import 'styled-components/macro';
import { DataContext } from '../context';

export default function PaletteContainer({ palette, setPalette }) {
  const [data, setData] = useContext(DataContext);

  const addNewData = (color) => {
    const results = [{id: new Date().getTime(), color, date: true, text:"Hello" }, ...data.results];
    setData({ ...data, results });
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleColorClick = (color) => {
    addNewData(color);
    setPalette({ active: false, extraAnimation: true });
  };
  const handleExtraAnimationEnd = () =>
    setPalette({ active: false, extraAnimation: false });

  return (
    <Palette
      active={palette.active}
      extraAnimation={palette.extraAnimation}
      onAnimationEnd={handleExtraAnimationEnd}
    >
      <Palette.Span>&#128578;</Palette.Span>
      <Palette.ColorButton
        color={colors.red_2}
        css={`
          right: 22px;
          top: 5px;
        `}
        onClick={() => handleColorClick(colors.red_2)}
      />
      <Palette.ColorButton
        color={colors.orange}
        css={`
          right: 8px;
        `}
        onClick={() => handleColorClick(colors.orange)}
      />
      <Palette.ColorButton
        color={colors.purple}
        onClick={() => handleColorClick(colors.purple)}
      />
      <Palette.ColorButton
        color={colors.blue}
        css={`
          right: 8px;
        `}
        onClick={() => handleColorClick(colors.blue)}
      />
      <Palette.ColorButton
        color={colors.green}
        css={`
          right: 22px;
          bottom: 5px;
        `}
        onClick={() => handleColorClick(colors.green)}
      />
    </Palette>
  );
}
