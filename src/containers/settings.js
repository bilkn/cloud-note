import React, { useContext } from 'react';
import { Form } from '../components';
import { DialogContext } from '../context';
import { useData, useFormLogic } from '../hooks';
import 'styled-components/macro';

function SettingsContainer() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    errors,
  } = useFormLogic();
  const [, setDialog] = useContext(DialogContext);
  const { DeleteAll } = useData();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDeleteAllNotes = () => {
    setDialog({
      isOpen: true,
      text:
        'Are you sure you want to delete all your notes? This will permanently erase your notes.',
      handler: () => DeleteAll(),
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
    <Form onSubmit={handleSubmit}>
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
            value={username}
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
            value={email}
            onChange={handleEmailChange}
            data-testid="email-input"
          />
        </Form.Fieldset>
        {errors?.email ? <Form.Error>{errors.email}</Form.Error> : null}
        <Form.Fieldset>
          <Form.Label htmlFor="user_password">Password</Form.Label>
          <Form.Input
            type="password"
            id="user_password"
            name="user[password]"
            value={password}
            autocomplete="current-password"
            onChange={handlePasswordChange}
          />
        </Form.Fieldset>
        {errors?.password ? <Form.Error>{errors.password}</Form.Error> : null}
      </Form.Wrapper>
      <Form.Button>Save</Form.Button>
      <Form.Wrapper>
        <Form.Subtitle>danger zone</Form.Subtitle>
        <Form.Line />
        <Form.Button variant="red" type="button" onClick={handleDeleteAllNotes}>
          Delete all notes
        </Form.Button>
        <Form.Button variant="red" type="button" onClick={handleDeleteAccount}>
          Delete account
        </Form.Button>
      </Form.Wrapper>
    </Form>
  );
}

export default SettingsContainer;
