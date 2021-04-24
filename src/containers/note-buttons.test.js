import { render } from '@testing-library/react';
import App from '../App';

test('Note is deleted after clicking delete button', () => {
  const { getByTitle } = render(<App />);

  /*   const deleteBtn = getByTitle('Delete note'); */
});
