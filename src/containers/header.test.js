import { cleanup, fireEvent, render } from '@testing-library/react';
import { HeaderContainer } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

test('Popover is rendered after clicking avatar', () => {
  const { getByTestId } = render(
    <Router>
      <HeaderContainer />
    </Router>
  );
  const avatar = getByTestId('avatar');
  fireEvent.click(avatar);
});
