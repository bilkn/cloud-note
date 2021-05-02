import { cleanup, fireEvent, render } from '@testing-library/react';
import { PasswordContainer } from '../containers';

afterEach(cleanup);

test('Old password input value changes after change event', () => {
  const { getByTestId } = render(<PasswordContainer />);
  const oldPasswordInput = getByTestId('old-password-input');
  fireEvent.change(oldPasswordInput, { target: { value: 'testing' } });
  expect(oldPasswordInput.value).toBe('testing');
});

test('New password input value changes after change event', () => {
  const { getByTestId } = render(<PasswordContainer />);
  const newPasswordInput = getByTestId('new-password-input');
  fireEvent.change(newPasswordInput, { target: { value: 'testing' } });
  expect(newPasswordInput.value).toBe('testing');
});
