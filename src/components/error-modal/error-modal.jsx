import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

export default function ErrorModal({ onClose }) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'System Error'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          We're unable to retrieve articles at this time. Please try again
          later.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Try Again
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ErrorModal.propTypes = {
  onClose: PropTypes.func,
};
