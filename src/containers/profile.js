import React from 'react';
import { FlexWrapper, Form } from '../components';
import Avatar from '../components/avatar';
import 'styled-components/macro';

export default function ProfileContainer() {
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
          <Form.Label for="profile_name">
            Name<Form.Span>*</Form.Span>
          </Form.Label>
          <Form.Input
            type="text"
            id="profile_name"
            name="profile[name]"
            autocomplete="name"
          />
        </Form.Fieldset>
        <Form.Fieldset
          css={`
            position: relative;
          `}
        >
          <Form.Label for="profile_bio">Bio</Form.Label>
          <Form.Span
            css={`
              color: #9e9ea7;
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            1200
          </Form.Span>
          <Form.Textarea
            as="textarea"
            id="profile_bio"
            name="profile[bio]"
            rows="10"
            maxlength="1200"
          />
        </Form.Fieldset>
      </Form>
    </FlexWrapper>
  );
}
