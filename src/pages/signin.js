import React, { useState } from 'react';
import { FlexWrapper, Form, Message } from '../components';
import { useFirebaseAuth } from '../hooks';
import 'styled-components/macro';
import { Google } from '@styled-icons/boxicons-logos/Google';
import * as ROUTES from '../constants/routes';
import { getDoc, initUser } from '../helpers/manageFirestore';
import devices from "../styles/devices";
import {sizes} from "../styles/variables";

export default function Signin() {
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signin, signInWithGoogle } = useFirebaseAuth();

  const handleLoginChange = (e) => setLoginValue(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signin(loginValue, password);
    } catch (err) {
      const { message } = err;
      setError(message);
    }
    setIsLoading(false);
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const { user } = await signInWithGoogle();
      const userDoc = await getDoc(user.uid);
      if (!userDoc) {
        await initUser(user.uid);
      }
    } catch (err) {
      const { message } = err;
      setError(message);
    }
    setIsLoading(false);
  };

  return (
    <FlexWrapper
      align="center"
      css={`
        justify-content: center;
        min-height: 100vh;
        @media ${devices.mobile} {
          margin-left: ${sizes.sidebar_width};
        }
      `}
    >
      <Form.Wrapper
        css={`
          max-width: 400px;
          padding: 1.3em;
        `}
      >
        <Form.Title>Sign in to CloudNote</Form.Title>
        {error && (
          <Message>
            <Message.List>
              <Message.Item>{error}</Message.Item>
            </Message.List>
          </Message>
        )}
        <Form onSubmit={handleSignInWithGoogle}>
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
        <Form onSubmit={handleSignIn}>
          <Form.Fieldset>
            <Form.Label htmlFor="login">Email Address</Form.Label>
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
            disabled={isLoading}
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
