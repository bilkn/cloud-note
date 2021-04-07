import React from 'react';
import { Form } from '../components';

export function PasswordContainer() {
  return (
    <Form>
      <Form.Wrapper>
        <Form.Fieldset>
          <Form.Label for="user_old_password">Old password</Form.Label>
          <Form.Input
            type="password"
            id="user_old_password"
            name="user[old_password]"
          />
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label for="user_password">New Password</Form.Label>
          <Form.Input
            type="password"
            id="user_password"
            name="user[password]"
            autocomplete="new-password"
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
