import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a navigation with home, about and contact', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/Home/gi)).toBeTruthy();
    expect(getByText(/About/gi)).toBeTruthy();
    expect(getByText(/Contact/gi)).toBeTruthy();
  });

  it('should be true',() => {
    expect(true).toBeTruthy();
  })
});
