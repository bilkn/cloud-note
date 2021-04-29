/* import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';


afterEach(() => {
  cleanup();
});

test('Note is deleted after clicking delete button', async () => {
  const history = createMemoryHistory();
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const fakeData = [fakeNote];
  const dataState = {
    results: fakeData,
    deleted: [],
    isLoading: false,
    isError: false,
  };
  const dispatchData = jest.fn();
  const { getByTitle, getByLabelText, getByTestId } = render(
    <Router history={history}>
      <DataProvider value={{ dataState, dispatchData }}>
        <ToastProvider>
          <MainContainer data={fakeData} />
        </ToastProvider>
      </DataProvider>
    </Router>
  );
  const textAreaElt = getByTestId('note-text-area');
  fireEvent.blur(textAreaElt);
  const boxBtn = await screen.findByLabelText('Toggle note menu');
  fireEvent.click(boxBtn);
  const deleteBtn = getByLabelText('Delete note');
  // !!! Delete button style may be tested in the future.
  fireEvent.click(deleteBtn);
});
 */