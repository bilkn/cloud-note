import React from 'react';
import { Form, FlexWrapper } from '../components';
import { Google } from '@styled-icons/boxicons-logos/Google';
import 'styled-components/macro';
import * as ROUTES from '../constants/routes';

export default function Signup() {
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
        <Form.Title>Sign up to NoteCloud</Form.Title>
        <Form>
          <Form.ButtonBlue>
            <Google
              size="18px"
              css={`
                margin-right: 5px;
              `}
            />
            Sign In with Google
          </Form.ButtonBlue>
        </Form>
        <Form.Divider />
        <Form>
          <Form.Fieldset>
            <Form.Label htmlFor="user_login">Username</Form.Label>
            <Form.Input id="user_login" type="text" />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label htmlFor="user_email">Email</Form.Label>
            <Form.Input
              id="user_email"
              name="user[email]"
              type="email"
              autocomplete="email"
            />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label htmlFor="user_password">Password</Form.Label>
            <Form.Input
              id="user_password"
              name="user[password]"
              type="password"
              autocomplete="new-password"
              placeholder="6+ characters"
            />
          </Form.Fieldset>
          <Form.Button
            variant="red"
            css={`
              width: 100%;
            `}
          >
            Sign In
          </Form.Button>
          <Form.Text
            css={`
              font-size: 0.9rem;
              margin-top: 1.5em;
              text-align: center;
            `}
          >
            Already a member?{' '}
            <Form.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Form.ButtonLink>
          </Form.Text>
        </Form>
      </Form.Wrapper>
    </FlexWrapper>
  );
}
