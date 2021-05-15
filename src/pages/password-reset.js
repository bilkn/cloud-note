import React from 'react';
import { FlexWrapper, Form } from '../components';
import 'styled-components/macro';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';

export default function PasswordReset() {
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
        <Form.Title>Forgot Password?</Form.Title>
        <Form.Text
          css={`
            font-size: 1rem;
            margin-top: 1.5em;
          `}
        >
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </Form.Text>
        <Form>
          <Form.Fieldset>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Input id="email" name="email" type="email" />
            <Form.Button
              variant="red"
              type="submit"
              css={`
                width: 100%;
              `}
            >
              Send Reset Instructions
            </Form.Button>
          </Form.Fieldset>
        </Form>
      </Form.Wrapper>
    </FlexWrapper>
  );
}
