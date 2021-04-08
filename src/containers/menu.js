import React from 'react';
import { Menu } from '../components';
import 'styled-components/macro';

export default function MenuContainer() {
  return (
    <Menu>
      <Menu.List>
        <Menu.Item>
          <Menu.Button>Edit Note</Menu.Button>
        </Menu.Item>
        <Menu.Item>
          <Menu.Button>Copy to Clipboard</Menu.Button>
        </Menu.Item>
        <Menu.Item
          css={`
            border: none;
          `}
        >
          <Menu.Button as="input" type="submit" value="Delete" />
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}
