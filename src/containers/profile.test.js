import { cleanup, fireEvent, render} from '@testing-library/react';
import { ProfileContainer } from '.';

afterEach(cleanup);

test('Name input value changes after change event', () => {
  const { getByTestId } = render(<ProfileContainer />);
  const nameInput = getByTestId('name-input');
  fireEvent.change(nameInput, { target: { value: 'testing' } });
  expect(nameInput.value).toBe('testing');
});

test('Bio input value changes after change event', () => {
  const { getByTestId } = render(<ProfileContainer />);
  const bioInput = getByTestId('bio-input');
  fireEvent.change(bioInput, { target: { value: 'testing' } });
  expect(bioInput.value).toBe('testing');
});
