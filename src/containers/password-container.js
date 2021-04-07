import React from 'react';
import { Form } from '../components';

export function PasswordContainer() {
  return (
    <Form>
      <Form.Wrapper>
        <Form.Fieldset>
          <Form.Label>Old password</Form.Label>
          <Form.Input type="password" />
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label>New Password</Form.Label>
          <Form.Input type="password" />
          <Form.Text>Minimum 6 characters</Form.Text>
        </Form.Fieldset>
        <Form.Box>
          <Form.ButtonRed>Change</Form.ButtonRed>
        </Form.Box>
      </Form.Wrapper>
    </Form>
  );
}
