import React from 'react';
import { FlexWrapper, Form } from '../components';
import 'styled-components/macro';
import { Google } from '@styled-icons/boxicons-logos/Google';
import { colors } from '../styles/variables';

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
        <Form.Title>Sign in to NoteCloud</Form.Title>
        <Form>
          <Form.Button
            css={`
              align-items: center;
              background: ${colors.blue_2};
              color: white;
              display: flex;
              justify-content: center;
              width: 100%;
              &:hover {
                background: ${colors.blue_2_hover};
              }
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
            <Form.Label htmlFor="login">Username or Email Address</Form.Label>
            <Form.Input
              id="login"
              type="text"
              autocorrect="off"
              autocapitalize="off"
            />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label
              htmlFor="user_password"
              css={`
                display: flex;
                justify-content: space-between;
              `}
            >
              Password
              <Form.ButtonLink
                css={`
                  margin: 0;
                `}
              >
                Forgot password?
              </Form.ButtonLink>
            </Form.Label>
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
