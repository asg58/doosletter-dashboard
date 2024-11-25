// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Doosletters Fabriek title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Doosletters Fabriek/i);
  expect(titleElement).toBeInTheDocument();
});
