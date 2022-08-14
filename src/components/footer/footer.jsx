import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link
        color='inherit'
        data-cy='github-link'
        href='https://github.com/teamwarren/blacktechdaily'
        target='_blank'
        rel='noopener noreferrer'
      >
        Black Tech Daily
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 3,
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
      component='footer'
    >
      <Copyright />
    </Box>
  );
}
