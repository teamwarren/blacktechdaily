import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

test('renders the mode button', () => {
  const { getByRole } = render(<Button />);
  expect(getByRole('button', { name: /mode/i })).toBeInTheDocument();
});
