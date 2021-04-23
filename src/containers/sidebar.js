import React, { useState } from 'react';
import { Sidebar } from '../components';
import { PaletteContainer } from '.';
import { Note } from '@styled-icons/fluentui-system-filled/Note';
import { TrashAlt } from '@styled-icons/fa-solid/TrashAlt';
import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle';
import 'styled-components/macro';
import devices from '../styles/devices';
import { useTranslateY } from '../hooks';
import * as ROUTES from '../constants/routes';
import { useLocation } from 'react-router';

export default function SidebarContainer() {
  const { translateY } = useTranslateY();
  const { pathname } = useLocation();
  const [palette, setPalette] = useState({
    active: false,
    extraAnimation: false,
  });

  const handleAddClick = () => {
    setPalette({ extraAnimation: false, active: !palette.active });
  };

  return (
    <>
      <Sidebar>
        <Sidebar.Wrapper>
          <Sidebar.Box>
            <Sidebar.Button
              onClick={handleAddClick}
              css={`
                display: none;
                @media ${devices.mobile} {
                  display: initial;
                }
              `}
              aria-label="Add new note"
              data-testid = "add-note-btn"
            >
              <AddCircle size="60" />
            </Sidebar.Button>
          </Sidebar.Box>
          <Sidebar.Nav translateY={translateY} active={translateY >= 0}>
            <Sidebar.List>
              <Sidebar.Item active={pathname === ROUTES.HOME}>
                <Sidebar.ButtonLink to={ROUTES.HOME} aria-label="Notes">
                  <Note size="35" />
                </Sidebar.ButtonLink>
              </Sidebar.Item>
              <Sidebar.Item
                css={`
                  bottom: 20px;
                  position: relative;
                  @media ${devices.mobile} {
                    display: none;
                  }
                `}
              >
                <Sidebar.Button
                  onClick={handleAddClick}
                  aria-label="Add new note"
                >
                  <AddCircle size="60" />
                </Sidebar.Button>
              </Sidebar.Item>
              <Sidebar.Item active={pathname === ROUTES.DELETED}>
                <Sidebar.ButtonLink
                  to={ROUTES.DELETED}
                  aria-label="Deleted notes"
                >
                  <TrashAlt size="28" />
                </Sidebar.ButtonLink>
              </Sidebar.Item>
            </Sidebar.List>
          </Sidebar.Nav>
        </Sidebar.Wrapper>
      </Sidebar>
      <PaletteContainer palette={palette} setPalette={setPalette} />
    </>
  );
}
