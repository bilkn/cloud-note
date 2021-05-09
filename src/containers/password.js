import React from 'react';
import { Form } from '../components';
import { useFormLogic } from '../hooks';
import 'styled-components/macro';

export default function PasswordContainer() {
  const { password, setPassword, newPassword, setNewPassword,submit } = useFormLogic();
  
  const handleOldPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit =  (e) => {
    e.preventDefault()
    submit()
  }

  return (
    <Form onSubmit ={handleSubmit}>
      <Form.Wrapper>
        <Form.Fieldset
          css={`
            margin: 0;
          `}
        >
          <Form.Label htmlhtmlFor="user_old_password">Old password</Form.Label>
          <Form.Input
            type="password"
            id="user_old_password"
            name="user[old_password]"
            value={password}
            onChange={handleOldPasswordChange}
            data-testid="old-password-input"
          />
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label htmlhtmlFor="user_password">New Password</Form.Label>
          <Form.Input
            type="password"
            id="user_password"
            name="user[password]"
            autocomplete="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            data-testid="new-password-input"
          />
          <Form.Text>Minimum 6 characters</Form.Text>
        </Form.Fieldset>
        <Form.Box>
          <Form.Button variant="red">Change</Form.Button>
        </Form.Box>
      </Form.Wrapper>
    </Form>
  );
}
