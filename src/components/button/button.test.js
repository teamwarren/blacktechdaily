import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render the mode button', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button', { name: 'mode' })).toBeInTheDocument();
  });
});
