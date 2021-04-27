import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { DialogContext } from '../context';
import 'styled-components/macro';

function SettingsContainer() {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [, setDialog] = useContext(DialogContext);

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleDeleteAllNotes = () => {
    setDialog({
      isOpen: true,
      text:
        'Are you sure you want to delete all your notes? This will permanently erase your notes.',
      handler: () => console.log('delete'),
      buttons: ['Cancel', 'Delete'],
    });
  };

  const handleDeleteAccount = () => {
    setDialog({
      isOpen: true,
      text:
        'Are you sure you want to delete your account? This will permanently erase your account and notes.',
      handler: () => console.log('delete account'),
      buttons: ['Cancel', 'Delete'],
    });
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
            data-testid="username-input"
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
            data-testid="email-input"
          />
        </Form.Fieldset>
      </Form.Wrapper>
      <Form.Button>Save</Form.Button>
      <Form.Wrapper>
        <Form.Subtitle>danger zone</Form.Subtitle>
        <Form.Line />
        <Form.ButtonRed type="button" onClick={handleDeleteAllNotes}>
          Delete all notes
        </Form.ButtonRed>
        <Form.ButtonRed type="button" onClick={handleDeleteAccount}>Delete account</Form.ButtonRed>
      </Form.Wrapper>
    </Form>
  );
}

export default SettingsContainer;
