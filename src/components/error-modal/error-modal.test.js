import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorModal from './error-modal';

test('displays error modal', () => {
  const { getByRole, getByText } = render(<ErrorModal />);
  expect(getByRole('heading')).toHaveTextContent('System Error');
  expect(
    getByText("We're unable to retrieve articles at this time.")
  ).toBeInTheDocument();
  expect(getByText('Please try again later.')).toBeInTheDocument();

  const submitButton = getByRole('button', { name: /Try Again/i });
  expect(submitButton).toHaveTextContent(/Try Again/i);
  fireEvent.click(submitButton);
});
