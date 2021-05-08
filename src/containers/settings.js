import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { DialogContext } from '../context';
import { useData, useFirebaseAuth } from '../hooks';
import 'styled-components/macro';
import firebase from 'firebase';

function SettingsContainer() {
  const { currentUser, updateEmail, updateProfile } = useFirebaseAuth();
  const [username, setUsername] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password)
      return console.log(
        'Please type your password in order to save your settings.'
      );
    console.log('submit');
    if (currentUser.displayName !== username) {
      try {
        await updateProfile(username);
        console.log('Username has been updated succesfully.');
      } catch (err) {
        console.log(err);
      }
    }
    if (currentUser.email !== email) {
      try {
        await updateEmail(email);
        console.log('email change succesful');
      } catch (err) {
        console.log(err);
        if (err.code === 'auth/requires-recent-login') {
          const credential = firebase.auth.EmailAuthProvider.credential(
            currentUser.email,
            '' + password
          );
          try {
            await currentUser.reauthenticateWithCredential(credential);
            await updateEmail(email);
            console.log('email change succesful');
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
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
        <Form.Fieldset>
          <Form.Label htmlFor="user_password">Password</Form.Label>
          <Form.Input
            type="password"
            id="user_password"
            name="user[password]"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Fieldset>
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
