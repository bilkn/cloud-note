import React, { useContext } from 'react';
import { Palette } from '../components';
import { colors } from '../styles/variables';
import devices from '../styles/devices';
import 'styled-components/macro';
import { DataContext } from '../context';
import { useMatchLastSubpath } from '../hooks';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router';

export default function PaletteContainer({ palette, setPalette }) {
  const [data, setData] = useContext(DataContext);
  const history = useHistory();
  const { matchSubpath } = useMatchLastSubpath();

  const addNewData = (color) => {
    const results = [
      { id: new Date().getTime(), color, date: true, text: 'Hello' },
      ...data.results,
    ];
    setData({ ...data, results });
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleColorClick = (color) => {
    if (!matchSubpath(ROUTES.HOME)) history.push(ROUTES.HOME);
    const mql = window.matchMedia(devices.mobile);
    addNewData(color);
    setPalette({ active: false, extraAnimation: mql.matches });
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
          left: 20px;
          top: 82px;
          @media ${devices.mobile} {
            left: initial;
            right: 22px;
            top: 5px;
          }
        `}
        onClick={() => handleColorClick(colors.red_2)}
      />
      <Palette.ColorButton
        color={colors.orange}
        css={`
          top: 35px;
          @media ${devices.mobile} {
            right: 8px;
          }
        `}
        onClick={() => handleColorClick(colors.orange)}
      />
      <Palette.ColorButton
        color={colors.purple}
        css={`
          top: 10px;
        `}
        onClick={() => handleColorClick(colors.purple)}
      />
      <Palette.ColorButton
        color={colors.blue}
        css={`
          top: 35px;
          @media ${devices.mobile} {
            right: 8px;
          }
        `}
        onClick={() => handleColorClick(colors.blue)}
      />
      <Palette.ColorButton
        color={colors.green}
        css={`
          right: 20px;
          top: 82px;
          @media ${devices.mobile} {
            right: 22px;
            bottom: 5px;
          }
        `}
        onClick={() => handleColorClick(colors.green)}
      />
    </Palette>
  );
}
