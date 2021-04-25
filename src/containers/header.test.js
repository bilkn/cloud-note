import { cleanup, fireEvent, render } from '@testing-library/react';
import { HeaderContainer } from '.';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

afterEach(cleanup);

describe('After clicking avatar', () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
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
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <HeaderContainer />
    </Router>
  );
  const searchInput = getByTestId('search-input');
  fireEvent.change(searchInput, { target: { value: 'testing' } });
  expect(searchInput.value).toBe('testing');
});
