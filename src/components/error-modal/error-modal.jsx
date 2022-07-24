import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const ErrorModal = ({ onClose }) => (
  <Dialog open={true}>
    <DialogTitle id='simple-dialog-title'>System Error</DialogTitle>
    <p>We're unable to retrieve articles at this time.</p>
    <p>Please try again later.</p>
    <Button variant='outlined' color='primary' onClick={onClose}>
      Try Again
    </Button>
  </Dialog>
);

export default ErrorModal;

ErrorModal.propTypes = {
  onClose: PropTypes.func,
};
