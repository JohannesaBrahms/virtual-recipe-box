'use client';

import { Checkbox, FormControlLabel, Grid, Input, TextField } from '@mui/material';
import { login } from '@/actions';

import * as Popover from '@radix-ui/react-popover';
import { Button } from '@/components/button';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default function LoginForm() {
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
      {/* <PopoverDemo /> */}
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
        Sign In
      </Button>
    </form>
  );
}
