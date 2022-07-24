import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByRole } = render(<App />);
  expect(
    getByRole('heading', { name: /Black Tech Daily/i })
  ).toBeInTheDocument();
  expect(
    getByRole('heading', {
      name: /Your Daily Source for News on Blacks in Tech and Business/i,
    })
  ).toBeInTheDocument();
});
