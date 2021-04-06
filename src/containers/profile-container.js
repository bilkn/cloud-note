import React from 'react';
import { FlexWrapper, Form } from '../components';
import Avatar from '../components/avatar';
import "styled-components/macro"

export function ProfileContainer() {
  return (
    <FlexWrapper align="center">
      <Avatar>
        <Avatar.Picture />
      </Avatar>
      <Form.Box>
        <Form.ButtonRed
          css={`
            margin: 0;
            padding: 
          `}
        >
          Upload new picture
        </Form.ButtonRed>
        <Form.Button>Delete</Form.Button>
      </Form.Box>
    </FlexWrapper>
  );
}
