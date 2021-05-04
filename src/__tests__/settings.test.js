import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SettingsContainer } from '../containers';
import { AllProviders } from '../__test-utils__/all-providers';

afterEach(cleanup);

const renderSettings = () =>
  render(
    <SettingsContainer />,
    { wrapper: AllProviders }
  );

test('Username input value changes after change event', () => {
  renderSettings();
  const usernameInput = screen.getByTestId('username-input');
  fireEvent.change(usernameInput, { target: { value: 'testing' } });
  expect(usernameInput.value).toBe('testing');
});

test('Email input value changes after change event', () => {
  renderSettings();
  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, { target: { value: 'testing' } });
  expect(emailInput.value).toBe('testing');
});
