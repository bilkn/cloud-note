import React from 'react';
import { FlexWrapper, Form } from '../components';
import Avatar from '../components/avatar';
import 'styled-components/macro';

export function ProfileContainer() {
  return (
    <FlexWrapper align="flex-start" direction="column">
      <FlexWrapper
        css={`
          margin: 0;
        `}
        align="center"
      >
        <Avatar>
          <Avatar.Picture />
        </Avatar>
        <Form>
          <Form.Box>
            <Form.ButtonRed
              css={`
                margin: 0;
                padding: ;
              `}
            >
              Upload new picture
            </Form.ButtonRed>
            <Form.Button>Delete</Form.Button>
          </Form.Box>
        </Form>
      </FlexWrapper>
      <Form>
        <Form.Fieldset>
          <Form.Label>
            Name<Form.Span>*</Form.Span>
          </Form.Label>
          <Form.Input type="text" />
        </Form.Fieldset>
        <Form.Fieldset maxlength="1200">
          <Form.Label>Bio</Form.Label>
          <Form.Textarea as="textarea" rows="10"/>
        </Form.Fieldset>
      </Form>
    </FlexWrapper>
  );
}
