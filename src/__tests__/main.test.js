import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '../containers';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AllProviders } from './all-providers';

test('renders notes', () => {
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const dataState = {
    results: [fakeNote],
    deleted: [],
    isLoading: false,
    isError: false,
  };
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <MainContainer data={dataState.results} />
    </Router>,
    { wrapper: AllProviders }
  );
  const noteTextArea = screen.getByTestId('note-text-area');
  expect(noteTextArea).toHaveTextContent(/testing note/i);
});
