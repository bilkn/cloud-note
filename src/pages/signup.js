import React, { useState } from 'react';
import { Google } from '@styled-icons/boxicons-logos/Google';
import 'styled-components/macro';
import { Form, FlexWrapper, Message } from '../components';
import * as ROUTES from '../constants/routes';
import { useFirebaseAuth, usePasswordStrength } from '../hooks';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup, signUpWithGoogle } = useFirebaseAuth();
  const { strength } = usePasswordStrength(password);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signup(email, password);
    } catch (err) {
      const { message } = err;
      setError(message);
    }
    setIsLoading(false);
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpWithGoogle();
    } catch (err) {
      const { message } = err;
      setError(message);
    }
  };

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
        {error && (
          <Message>
            <Message.List>
              <Message.Item>{error}</Message.Item>
            </Message.List>
          </Message>
        )}
        <Form onSubmit={handleGoogleSignUp}>
          <Form.ButtonBlue>
            <Google
              size="18px"
              css={`
                margin-right: 5px;
              `}
            />
            Sign Up with Google
          </Form.ButtonBlue>
        </Form>
        <Form.Divider />
        <Form onSubmit={handleEmailSignUpSubmit}>
          <Form.Fieldset>
            <Form.Label htmlFor="user_login">Username</Form.Label>
            <Form.Input
              id="user_login"
              type="text"
              onChange={handleUsernameChange}
              value={username}
            />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label htmlFor="user_email">Email</Form.Label>
            <Form.Input
              id="user_email"
              name="user[email]"
              type="email"
              autocomplete="email"
              onChange={handleEmailChange}
              value={email}
            />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label
              htmlFor="user_password"
              css={`
                align-items: center;
                display: flex;
                justify-content: space-between;
              `}
            >
              Password
              {password && <Form.PasswordStrength strength={strength} />}
            </Form.Label>
            <Form.Input
              id="user_password"
              name="user[password]"
              type="password"
              autocomplete="new-password"
              placeholder="6+ characters"
              onChange={handlePasswordChange}
              value={password}
            />
          </Form.Fieldset>
          <Form.Button
            disabled={isLoading}
            variant="red"
            css={`
              width: 100%;
            `}
          >
            Sign Up
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
