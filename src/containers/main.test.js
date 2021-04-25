import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders notes', () => {
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const fakeDataState = {
    results: [fakeNote],
    deleted: [],
    isLoading: false,
    isError: false,
  };
  const dispatchData = jest.fn();
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <DataProvider value={{ dataState: fakeDataState, dispatchData }}>
        <ToastProvider>
          <MainContainer data={fakeDataState.results} />
        </ToastProvider>
      </DataProvider>
    </Router>
  );
  const noteTextArea = screen.getByTestId('note-text-area');
  expect(noteTextArea).toHaveTextContent(/testing note/i);
});
