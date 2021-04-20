import { cleanup, fireEvent, render } from '@testing-library/react';
import { HeaderContainer } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('After clicking avatar', () => {
  const { getByTestId } = render(
    <Router>
      <HeaderContainer />
    </Router>
  );
  it('Should render popover component', () => {
    const avatar = getByTestId('avatar');
    fireEvent.click(avatar);
    getByTestId('popover');
  });
});

test('Search input value changes after change event', () => {
  const { getByTestId } = render(<HeaderContainer />);
  const searchInput = getByTestId('search-input');
  fireEvent.change(searchInput, { target: { value: 'testing' } });
  expect(searchInput.value).toBe('testing');
});

