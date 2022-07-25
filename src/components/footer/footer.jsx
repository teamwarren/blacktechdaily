import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <>
      <Typography variant='body2' color='text.secondary'>
        {'Copyright © '}
        <Link
          color='inherit'
          href='https://github.com/teamwarren/blacktechdaily'
        >
          Black Tech Daily
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 3,
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
        }}
        component='footer'
      >
        <Copyright />
      </Box>
    </>
  );
}
