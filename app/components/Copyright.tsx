import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/" component={NextLink}>
        Virtual Recipe Box
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
