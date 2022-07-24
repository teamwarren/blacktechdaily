import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

test('renders the app', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/© 2020 | TeamWarren/i)).toBeInTheDocument();
});
