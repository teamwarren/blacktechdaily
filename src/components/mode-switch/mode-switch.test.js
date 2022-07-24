import React from 'react';
import { render } from '@testing-library/react';
import Button from './mode-switch';

test('renders the mode button', () => {
  const { getByRole } = render(<Button />);
  expect(getByRole('checkbox')).toBeInTheDocument();
});
