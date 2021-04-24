import { render } from '@testing-library/react';
import { MainContainer } from '.';
import { DataProvider, ToastProvider } from '../providers';

test('Note is deleted after clicking delete button', () => {
  const dataState = {
    results: [],
    deleted: [],
    isLoading: false,
    isError: false,
  };
  const toastState = [];
  const dispatchData = jest.fn();
  const dispatchToast = jest.fn();
  const { getByTitle } = render(
    <ToastProvider value={{dispatchToast}}>
      <DataProvider value={{ dataState, dispatchData }}>
        <MainContainer />
      </DataProvider>
    </ToastProvider>
  );

  const deleteBtn = getByTitle('Delete note');
});
