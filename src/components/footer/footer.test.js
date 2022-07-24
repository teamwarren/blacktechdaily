import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

test('renders the footer', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Copyright ©/i)).toBeInTheDocument();
  expect(getByText(/Black Tech Daily/i)).toBeInTheDocument();
  expect(getByText(/2022/i)).toBeInTheDocument();
  expect(getByText(/Black Tech Daily/i).closest('a')).toHaveAttribute(
    'href',
    'https://github.com/teamwarren/blacktechdaily'
  );
});
