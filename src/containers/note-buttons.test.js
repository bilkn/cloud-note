import { fireEvent, render } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';



test('Note is deleted after clicking delete button', () => {
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const fakeData = [fakeNote];
  const { getByTitle, getByLabelText, getByTestId } = render(
    <DataProvider>
      <ToastProvider>
        <MainContainer data={fakeData} />
      </ToastProvider>
    </DataProvider>
  );
  const boxBtn = getByLabelText('Toggle note menu');
  fireEvent.click(boxBtn);
  const deleteBtn = getByLabelText('Delete note');
  // !!! Delete button style may be tested in the future.
  fireEvent.click(deleteBtn)

});
