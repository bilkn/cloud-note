import React from 'react';
import { Menu } from '../components';
import 'styled-components/macro';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';

export default function MenuContainer() {
  return (
    <Menu>
      <Menu.List>
        <Menu.Item
          css={`
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          `}
        >
          <Menu.Button>
            <Menu.Icon>
              <Edit size="24" />
            </Menu.Icon>
            Edit Note
          </Menu.Button>
        </Menu.Item>
        <Menu.Item>
          <Menu.Button>
            <Menu.Icon>
              <Clipboard size="24" />
            </Menu.Icon>
            Copy to Clipboard
          </Menu.Button>
        </Menu.Item>
        <Menu.Item
          css={`
            border: none;
          `}
        >
          <Menu.Button type="submit">
            <Menu.Icon>
              <Trash size="24" />
            </Menu.Icon>
            Delete
          </Menu.Button>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
