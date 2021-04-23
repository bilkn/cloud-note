import { render } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';
import { PaletteContainer } from '.';
import { DataProvider } from '../providers';
import { BrowserRouter as Router } from 'react-router-dom';
import { scroll } from '../mocks';

let matchMedia = null;

describe('Tests note creation', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
    scroll();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test('New note is created after color button click', () => {
    const setPalette = jest.fn();
    const mediaQuery = '(min-width: 30em)';
    const mql = window.matchMedia(mediaQuery);
    const { getByTestId } = render(
      <Router>
        <DataProvider>
          <PaletteContainer
            palette={{ active: false, extraAnimation: false }}
            setPalette={setPalette}
          />
        </DataProvider>
      </Router>
    );
  });
});
