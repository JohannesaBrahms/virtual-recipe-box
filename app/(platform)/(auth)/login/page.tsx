import { Box, Typography } from '@mui/material';
import LoginForm from '../_components/login-form';

const LoginPage = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
