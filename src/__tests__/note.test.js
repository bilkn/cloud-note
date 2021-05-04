import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { MainContainer, DialogContainer } from '../containers';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AllProviders } from '../__test-utils__/all-providers';
import * as ROUTES from '../constants/routes';

const createFakeNote = () => {
  return {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date('1995-12-17T03:24:00'),
    text: 'Testing note',
    lastModified: true,
  };
};

const defineScroll = () => {
  Object.defineProperty(Element.prototype, 'scroll', {
    value: jest.fn(),
    writable: false,
    configurable: false,
  });
};

/* 
beforeEach(() => {
  Object.defineProperty(Element.prototype, 'scroll', {
    value: jest.fn(),
    writable: false,
    configurable: false,
  });
}); */

afterEach(() => {
  cleanup();
});

/* test('Note is deleted after clicking delete button', () => {
  const { result } = renderHook(() => useData());
  const history = createMemoryHistory();
  const id = uuidv4();
  const fakeNote = {
    id,
    color: 'orange',
    timestamp: new Date('1995-12-17T03:24:00'),
    text: 'Testing note',
    lastModified: true,
  };
  const fakeData = [fakeNote];
  const dataState = {
    results: fakeData,
    deleted: [],
    isLoading: false,
    isError: false,
  };
  const dialogState = {
    isOpen: false,
    handler: null,
    text: '',
    buttons: [],
  };

  const dispatchData = jest.fn();
  const dispatchToast = jest.fn();
  const setDialog = jest.fn();
  const { rerender } = render(
    <>
      <DataProvider value={{ dataState: dataState, dispatchData }}>
        <ToastProvider value={{ toastState: [], dispatchToast }}>
          <DialogProvider value={[dialogState, setDialog]}>
            <Router history={history}>
              <MainContainer data={fakeData} />
            </Router>
            <DialogContainer />
          </DialogProvider>
        </ToastProvider>
      </DataProvider>
      <div id="portal" />
    </>
  );

  const afterDialogState = {
    isOpen: true,
    handler: () => jest.fn(),
    text: 'Are you sure to delete this note?',
    buttons: ['Cancel', 'Delete'],
  };
  const note = screen.getByTestId('note');
  const boxBtn = screen.getByLabelText('Toggle note menu');
  fireEvent.click(boxBtn);
  const deleteBtn = screen.getByLabelText('Delete note');

  fireEvent.click(deleteBtn);
 act(() => {
   result.current.Delete(id);
 });
  rerender(
    <>
      <DataProvider value={{ dataState: dataState, dispatchData }}>
        <ToastProvider value={{ toastState: [], dispatchToast }}>
          <DialogProvider value={[afterDialogState, setDialog]}>
            <Router history={history}>
              <MainContainer data={fakeData} />
            </Router>
            <DialogContainer />
          </DialogProvider>
        </ToastProvider>
      </DataProvider>
      <div id="portal" />
    </>
  );
  const dialog = screen.getByText('Are you sure to delete this note?');
  const dialogDeleteBtn = screen.getByText('Delete');
  fireEvent.click(dialogDeleteBtn);
  expect(note).toBeNull();
}); */

describe('Home note non-dialog buttons are working correctly', () => {
  defineScroll();
  beforeEach(() => {
    const history = createMemoryHistory();
    const fakeNote = createFakeNote();
    const fakeData = [fakeNote];
    render(
      <>
        <Router history={history}>
          <MainContainer data={fakeData} />
        </Router>
        <DialogContainer />
      </>,
      { wrapper: AllProviders }
    );
  });

  test('Text area is focused after edit button click', () => {
    const textArea = screen.getByTestId('note-text-area');
    const boxBtn = screen.getByLabelText('Toggle note menu');
    fireEvent.click(boxBtn);
    const editBtn = screen.getByLabelText('Edit note');
    fireEvent.click(editBtn);
    expect(textArea).toHaveFocus();
  });

  test('Text is copied after copy button click', () => {
    document.execCommand = jest.fn();
    const boxBtn = screen.getByLabelText('Toggle note menu');
    fireEvent.click(boxBtn);
    const copyBtn = screen.getByLabelText('Copy to clipboard');
    fireEvent.click(copyBtn);
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  test('Large note is opened after enlarge button click', () => {
    const boxBtn = screen.getByLabelText('Toggle note menu');
    fireEvent.click(boxBtn);
    const enlargeBtn = screen.getByLabelText('Enlarge note');
    fireEvent.click(enlargeBtn);
    const noteNodes = screen.getAllByTestId('note');
    expect(noteNodes.length).toBe(2);
  });
});

describe('Deleted page note buttons are working correctly', () => {
  test('Note is recovered after recover button click', () => {
    const history = createMemoryHistory();
    const fakeNote = createFakeNote();
    const fakeData = [fakeNote];
    history.push(ROUTES.DELETED);
    const { debug } = render(
      <>
        <Router history={history}>
          <MainContainer data={fakeData} />
        </Router>
        <DialogContainer />
      </>,
      { wrapper: AllProviders }
    );
    const boxBtn = screen.getByLabelText('Toggle note menu');
    fireEvent.click(boxBtn);
    const recoverBtn = screen.getByLabelText('Recover note');
    fireEvent.click(recoverBtn);
    debug();
  });
});
