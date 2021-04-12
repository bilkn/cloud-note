import React from 'react';
import { Sidebar } from '../components';
import { Note } from '@styled-icons/fluentui-system-filled/Note';
import { TrashAlt } from '@styled-icons/fa-solid/TrashAlt';
import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle';
import 'styled-components/macro';
import devices from '../styles/devices';

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Wrapper>
        <Sidebar.Nav>
          <Sidebar.List>
            <Sidebar.Item>
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
  );
}
