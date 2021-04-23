
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';

test("renders notes",()=> {
    const fakeNote = {
      id: uuidv4(),
      color: 'orange',
      timestamp: new Date(),
      text: 'Testing note',
    };
    const fakeData = { results: [fakeNote], isLoading: false, isError: false };
    const setData = jest.fn();
    render(
      <DataProvider value={[fakeData, setData]}>
        <ToastProvider>
          <MainContainer />
        </ToastProvider>
      </DataProvider>
    );
    const noteTextArea = screen.getByTestId('note-text-area');
    expect(noteTextArea).toHaveTextContent(/testing note/i);
})