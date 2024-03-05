'use client';

import { Button } from '@/components/button';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema, LoginSchemaType } from '@/schemas';
import { login } from '@/actions';

import { Checkbox, FormControlLabel, InputAdornment, TextField } from '@mui/material';
import { EyeIcon } from '@heroicons/react/24/outline';

export const LoginForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form action={login}>
      <Controller
        control={control}
        {...register('email')}
        name="email"
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            id="email"
            name="email"
            aria-label="Email Address"
            fullWidth
            autoFocus
            aria-required
            required
            placeholder="example@example.com"
            type="email"
            // helperText="Wajib diisi"
            label="Email"
          />
        )}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <Controller
        control={control}
        {...register('password')}
        name="password"
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            id="password"
            name="password"
            type="password"
            aria-label="Password"
            fullWidth
            autoFocus
            aria-required
            required
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EyeIcon />
                </InputAdornment>
              ),
            }}
          />
        )}></Controller>
      {errors.password && <span>{errors.password.message}</span>}
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
