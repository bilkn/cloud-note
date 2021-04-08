import React from 'react';
import { Sidebar } from '../components';
import { Note } from '@styled-icons/fluentui-system-filled/Note';
import { TrashAlt } from '@styled-icons/fa-solid/TrashAlt';
import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle';

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Wrapper>
        <Sidebar.Nav>
          <Sidebar.List>
            <Sidebar.ButtonLink>
              <Note size="35" />
            </Sidebar.ButtonLink>
            <Sidebar.Button>
              <AddCircle size="60" />
            </Sidebar.Button>
            <Sidebar.ButtonLink>
              <TrashAlt size="28" />
            </Sidebar.ButtonLink>
          </Sidebar.List>
        </Sidebar.Nav>
      </Sidebar.Wrapper>
    </Sidebar>
  );
}


