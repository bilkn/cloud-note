import { cleanup, fireEvent, render } from '@testing-library/react';
import { SettingsContainer } from '.';

afterEach(cleanup);

test('Username input value changes after change event', () => {
  const { getByTestId } = render(<SettingsContainer />);
  const usernameInput = getByTestId('username-input');
  fireEvent.change(usernameInput, { target: { value: 'testing' } });
  expect(usernameInput.value).toBe('testing');
});

test('Email input value changes after change event', () => {
  const { getByTestId } = render(<SettingsContainer />);
  const emailInput = getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'testing' } });
  expect(emailInput.value).toBe('testing');
});
