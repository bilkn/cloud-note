import { render, fireEvent, cleanup } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';
import { scroll } from '../mocks';
import App from '../App';

let matchMedia = null;

describe('Tests note creation', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
    scroll(window);
  });

  afterEach(() => {
    matchMedia.clear();
    cleanup();
  });

  test('New note is created after color button click', () => {
    const { getByTestId } = render(<App />);
    const colorBtn = getByTestId('color-btn');
    fireEvent.click(colorBtn);
    const note = getByTestId('note');
    expect(note).toBeInTheDocument();
  });
});
