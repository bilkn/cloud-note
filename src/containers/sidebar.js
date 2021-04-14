import React, { useState } from 'react';
import { Palette, Sidebar } from '../components';
import { Note } from '@styled-icons/fluentui-system-filled/Note';
import { TrashAlt } from '@styled-icons/fa-solid/TrashAlt';
import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle';
import 'styled-components/macro';
import devices from '../styles/devices';
import { colors } from '../styles/variables';

export default function SidebarContainer() {
  const [palette, setPalette] = useState({
    active: false,
    extraAnimation: false,
  });

  const handleAddClick = () =>
    setPalette({ extraAnimation: false, active: !palette.active });

  const handleColorClick = () => {
    console.log('color click');
    setPalette({ active: false, extraAnimation: true });
  };

  const handleExtraAnimationEnd = () => {
    console.log("end")
    setPalette({ active: false, extraAnimation: false });
  };
  // !!! translateY values will be changed according to item order.
  return (
    <>
      <Sidebar>
        <Sidebar.Wrapper>
          <Sidebar.Box>
            <Sidebar.Button
              onClick={handleAddClick}
              css={`
                display: none;
                @media ${devices.tablet} {
                  display: initial;
                }
              `}
            >
              <AddCircle size="60" />
            </Sidebar.Button>
          </Sidebar.Box>
          <Sidebar.Nav /* translateY="90" */>
            <Sidebar.List>
              <Sidebar.Item active>
                <Sidebar.ButtonLink aria-label="Notes">
                  <Note size="35" />
                </Sidebar.ButtonLink>
              </Sidebar.Item>
              <Sidebar.Item
                css={`
                  bottom: 20px;
                  position: relative;
                  @media ${devices.tablet} {
                    display: none;
                  }
                `}
              >
                <Sidebar.Button aria-label="Add new note">
                  <AddCircle size="60" />
                </Sidebar.Button>
              </Sidebar.Item>
              <Sidebar.Item>
                <Sidebar.ButtonLink aria-label="Deleted notes">
                  <TrashAlt size="28" />
                </Sidebar.ButtonLink>
              </Sidebar.Item>
            </Sidebar.List>
          </Sidebar.Nav>
        </Sidebar.Wrapper>
      </Sidebar>
      <Palette
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
      </Palette>
    </>
  );
}
