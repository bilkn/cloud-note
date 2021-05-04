import { cleanup, fireEvent, render } from '@testing-library/react';
import { SidebarContainer } from '../containers';
import { BrowserRouter as Router } from 'react-router-dom';
import { AllProviders } from '../__test-utils__/all-providers';

afterEach(cleanup);

test('Palette slides in after add note button click', () => {
  const { getByTestId } = render(
    <Router>
      <SidebarContainer />
    </Router>,
    { wrapper: AllProviders }
  );
  const addButton = getByTestId('add-note-btn');
  const palette = getByTestId('palette');

  expect(palette).toHaveStyle('transform: translateY(100%);');
  fireEvent.click(addButton);
  expect(palette).toHaveStyle('transform: translateY(25%);');
});
