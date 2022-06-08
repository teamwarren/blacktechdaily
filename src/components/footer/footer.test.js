import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  it('should render footer content', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('© 2022 | TeamWarren')).toBeInTheDocument();
  });
});
