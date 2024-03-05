'use client';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { login } from '@/actions';

import { Button } from '@/components/button';

export const LoginForm = () => {
  return (
    <form action={login}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        aria-label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      {/* <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        aria-label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      /> */}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
        Sign In
      </Button>
    </form>
  );
};
