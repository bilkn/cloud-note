import React, { useState } from 'react';
import { Form } from '../components';
import 'styled-components/macro';

function SettingsContainer() {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleUsernameChange = (e) => {
    e.stopPropagation();
    setUsernameValue(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    e.stopPropagation();
    setEmailValue(e.target.value);
  };

  return (
    <Form>
      <Form.Wrapper>
        <Form.Fieldset
          name=""
          css={`
            margin: 0;
          `}
        >
          <Form.Label htmlFor="user_login">Username</Form.Label>
          <Form.Input
            type="text"
            id="user_login"
            name="user[login]"
            value={usernameValue}
            autocorrect="username"
            onChange={handleUsernameChange}
          />
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label htmlFor="user_email">Email</Form.Label>
          <Form.Input
            type="email"
            id="user_email"
            name="user[email]"
            autocomplete="email"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </Form.Fieldset>
      </Form.Wrapper>
      <Form.Button>Save</Form.Button>
      <Form.Wrapper>
        <Form.Subtitle>danger zone</Form.Subtitle>
        <Form.Line />
        <Form.ButtonRed>Delete all notes</Form.ButtonRed>
        <Form.ButtonRed>Delete account</Form.ButtonRed>
      </Form.Wrapper>
    </Form>
  );
}

export default SettingsContainer;
