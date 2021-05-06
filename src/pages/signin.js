import React, { useState } from 'react';
import { FlexWrapper, Form } from '../components';
import { useFirebaseAuth } from '../hooks';
import 'styled-components/macro';
import { Google } from '@styled-icons/boxicons-logos/Google';
import { colors } from '../styles/variables';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useFirebaseAuth();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(loginValue, password);
      console.log(signin);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginChange = (e) => setLoginValue(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

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
        <Form onSubmit={handleSignInSubmit}>
          <Form.ButtonBlue>
            <Google
              size="20px"
              css={`
                margin-right: 5px;
              `}
            />
            Sign in with Google
          </Form.ButtonBlue>
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
              onChange={handleLoginChange}
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
                to={ROUTES.PASSWORD_RESET}
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
              onChange={handlePasswordChange}
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
            Not a member?{' '}
            <Form.ButtonLink to={ROUTES.SIGN_UP}>Sign Up Now</Form.ButtonLink>
          </Form.Text>
        </Form>
      </Form.Wrapper>
    </FlexWrapper>
  );
}
