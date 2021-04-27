import { fireEvent, render } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';
import { createMemoryHistory } from 'history';
import {Router} from "react-router-dom";

test('Note is deleted after clicking delete button', () => {
  const history = createMemoryHistory();
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const fakeData = [fakeNote];
  const { getByTitle, getByLabelText, getByTestId } = render(
    <Router history={history}>
      <DataProvider>
        <ToastProvider>
          <MainContainer data={fakeData} />
        </ToastProvider>
      </DataProvider>
    </Router>
  );
  const boxBtn = getByLabelText('Toggle note menu');
  fireEvent.click(boxBtn);
  const textArea = getByTestId("note-text-area");
  fireEvent.blur(textArea)
  const deleteBtn = getByLabelText('Delete note');
  // !!! Delete button style may be tested in the future.
  fireEvent.click(deleteBtn);
});
