import React from 'react';
import 'styled-components/macro';
import { Form, Spinner } from '../components';
import { usePasswordLogic, usePasswordStrength } from '../hooks';

export default function PasswordContainer() {
  const {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    errors,
    submit,
    loading,
  } = usePasswordLogic();
  
  const { strength } = usePasswordStrength(newPassword);
  

  const handleOldPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Wrapper>
        <Form.Fieldset
          css={`
            margin: 0;
          `}
        >
          <Form.Label htmlhtmlFor="user_old_password">
            Current password
          </Form.Label>
          <Form.Input
            type="password"
            id="user_old_password"
            name="user[old_password]"
            value={password}
            onChange={handleOldPasswordChange}
            data-testid="old-password-input"
          />
        </Form.Fieldset>
        {errors?.password ? <Form.Error>{errors.password}</Form.Error> : null}
        <Form.Fieldset>
          <Form.Label
            htmlhtmlFor="user_password"
            css={`
              align-items: center;
              display: flex;
              justify-content: space-between;
            `}
          >
            New Password{' '}
            {newPassword && <Form.PasswordStrength strength={strength} />}
          </Form.Label>
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
        {errors?.newPassword ? (
          <Form.Error>{errors.newPassword}</Form.Error>
        ) : null}
        <Form.Box>
          <Form.Button variant="red">
            {loading ? <Spinner color="white" /> : 'Change'}
          </Form.Button>
        </Form.Box>
      </Form.Wrapper>
    </Form>
  );
}
