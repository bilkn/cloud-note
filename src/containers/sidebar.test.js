import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SidebarContainer } from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider, ToastProvider } from '../providers';

afterEach(cleanup);

test('Palette slides in after add note button click', () => {
  const { getByTestId } = render(
    <Router>
      <DataProvider>
        <ToastProvider>
          <SidebarContainer />
        </ToastProvider>
      </DataProvider>
    </Router>
  );
  const addButton = getByTestId("add-note-btn");
  const palette = getByTestId('palette');

  expect(palette).toHaveStyle('transform: translateY(100%);');
  fireEvent.click(addButton)
  expect(palette).toHaveStyle('transform: translateY(25%);');
});
