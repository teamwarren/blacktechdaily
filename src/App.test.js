import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render heading content', () => {
  const { getByRole } = render(<App />);
  expect(
    getByRole('heading', { name: 'Black Tech Daily' })
  ).toBeInTheDocument();

  expect(getByRole('button', { name: 'dark mode' })).toBeInTheDocument();

  expect(
    getByRole('heading', {
      name: 'Your Daily Source for News on Blacks in Tech and Business',
    })
  ).toBeInTheDocument();
});
