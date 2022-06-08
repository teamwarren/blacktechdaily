import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render heading content', () => {
    const { getByRole } = render(<App />);
    expect(
      getByRole('heading', { name: 'Black Tech Daily' })
    ).toBeInTheDocument();

    expect(
      getByRole('heading', {
        name: 'Your Daily Source for News on Blacks in Tech and Business',
      })
    ).toBeInTheDocument();
  });
});
