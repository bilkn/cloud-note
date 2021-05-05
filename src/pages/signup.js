import React, { useState } from 'react';
import { Google } from '@styled-icons/boxicons-logos/Google';
import 'styled-components/macro';
import { Form, FlexWrapper } from '../components';
import * as ROUTES from '../constants/routes';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const [errors, setErrors] = useState({});
  const { signup } = useFirebaseAuth();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailSignInSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setError({ state: false, message: '' });
    try {
      await signup(email, password);
      console.log('succesful');
    } catch (err) {
      setError({ state: true, message: 'An error occurred.' });
      console.log(err);
      console.log(error.message);
    } 
    console.log('final');
    setIsLoading(false);
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
        <Form>
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
        <Form onSubmit={handleEmailSignInSubmit}>
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
            <Form.Label htmlFor="user_password">Password</Form.Label>
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
