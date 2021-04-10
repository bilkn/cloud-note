import React from 'react';
import { FlexWrapper, Form } from '../components';
import 'styled-components/macro';
import { Google } from '@styled-icons/boxicons-logos/Google';

export default function Signin() {
  return (
    <FlexWrapper
      align="center"
      css={`
        justify-content: center;
        min-height: 100vh;
      `}
    >
      <Form.Wrapper
        css={`
          max-width: 400px;
          padding: 1.3em;
        `}
      >
        <Form.Text
          css={`
            font-size: 1.5rem;
            font-weight: 600;
          `}
        >
          Sign in to NoteCloud
        </Form.Text>
        <Form>
          <Form.Button
            css={`
              align-items: center;
              background: #4285f4;
              color: white;
              display: flex;
              justify-content: center;
              width: 100%;
            `}
          >
            <Google
              size="20px"
              css={`
                margin-right: 5px;
              `}
            />
            Sign in with Google
          </Form.Button>
        </Form>
        <Form.Divider />
        <Form>
          <Form.Fieldset>
            <Form.Label for="user_login">Username or Email Address</Form.Label>
            <Form.Input id="user_login" type="text" />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label for="user_password">Password</Form.Label>
            <Form.Input
              id="user_password"
              name="user[password]"
              type="password"
              autocomplete="new-password"
            />
          </Form.Fieldset>
          <Form.ButtonRed
            css={`
              width: 100%;
            `}
          >
            Sign In
          </Form.ButtonRed>
          <Form.Text
            css={`
              font-size: 0.9rem;
              margin-top: 1.5em;
              text-align: center;
            `}
          >
            Not a member? <Form.ButtonLink>Sign Up Now</Form.ButtonLink>
          </Form.Text>
        </Form>
      </Form.Wrapper>
    </FlexWrapper>
  );
}
