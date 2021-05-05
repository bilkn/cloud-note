import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { HeaderContainer, MainContainer } from '../containers';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { DataProvider } from '../providers';
import createFakeData from '../__test-utils__/createFakeData';
import { AllProviders } from '../__test-utils__/all-providers';

afterEach(cleanup);

const RouterWrapper = ({ children }) => {
  const history = createMemoryHistory();
  return <Router history={history}>{children}</Router>;
};

describe('After clicking avatar', () => {
  const { getByTestId } = render(<HeaderContainer />, {
    wrapper: RouterWrapper,
  });
  test('Should render popover component', () => {
    const avatar = getByTestId('avatar');
    fireEvent.click(avatar);
    getByTestId('popover');
  });
});

test('Search input value changes after change event', () => {
  const { getByPlaceholderText } = render(<HeaderContainer />, {
    wrapper: RouterWrapper,
  });
  const searchInput = getByPlaceholderText('Find a note');
  fireEvent.change(searchInput, { target: { value: 'testing' } });
  expect(searchInput.value).toBe('testing');
});

test('Notes are filtered according to the search input', () => {
  const history = createMemoryHistory();
  render(
    <>
      <Router history={history}>
        <HeaderContainer />
        <MainContainer data={createFakeData()} />
      </Router>
    </>,
    { wrapper: AllProviders }
  );
  const searchInput = screen.getByPlaceholderText('Find a note');
  fireEvent.change(searchInput, { target: { value: 'lorem' } });
  const filteredNotes = screen.getAllByTestId('note');
  expect(filteredNotes.length).toBe(3); // Number of displayed notes according to the mock data.
});
