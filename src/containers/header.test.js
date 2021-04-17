import { cleanup, fireEvent, render } from '@testing-library/react';
import { HeaderContainer } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('After clicking avatar', () => {
  const { getByTestId } = render(
    <Router>
      <HeaderContainer />
    </Router>
  );
  it('Should render popover component', () => {
    const avatar = getByTestId('avatar');
    fireEvent.click(avatar);
    getByTestId('popover');
  });
});
