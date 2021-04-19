import React, { useState } from 'react';
import { Form } from '../components';
import 'styled-components/macro';

export default function PasswordContainer() {
  const [oldPasswordValue, setOldPasswordValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');

  const handleOldPasswordChange = (e) => {
    e.stopPropagation();
    setOldPasswordValue(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    e.stopPropagation();
    setNewPasswordValue(e.target.value);
  };

  return (
    <Form>
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
            value={oldPasswordValue}
            onChange={handleOldPasswordChange}
          />
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label htmlhtmlFor="user_password">New Password</Form.Label>
          <Form.Input
            type="password"
            id="user_password"
            name="user[password]"
            autocomplete="new-password"
            value={newPasswordValue}
            onChange={handleNewPasswordChange}
          />
          <Form.Text>Minimum 6 characters</Form.Text>
        </Form.Fieldset>
        <Form.Box>
          <Form.ButtonRed>Change</Form.ButtonRed>
        </Form.Box>
      </Form.Wrapper>
    </Form>
  );
}
