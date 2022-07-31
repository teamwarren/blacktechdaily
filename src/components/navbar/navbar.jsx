import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ModeSwitch from '../mode-switch/mode-switch';

export default function Navbar({ colorMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            data-cy='navbar-title'
          >
            Black Tech Daily
          </Typography>
          <ModeSwitch colorMode={colorMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
