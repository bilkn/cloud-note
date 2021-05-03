import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SettingsContainer } from '../containers';
import { DialogProvider, DataProvider, ToastProvider } from '../providers';

afterEach(cleanup);

const renderSettings = () =>
  render(
    <ToastProvider>
      <DataProvider>
        <DialogProvider>
          <SettingsContainer />
        </DialogProvider>
      </DataProvider>
    </ToastProvider>
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
