'use client';

import { Button } from '@/components/button';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema, Login } from '@/lib/types';
import { login } from '@/actions/login';

import { Checkbox, FormControlLabel, InputAdornment, TextField } from '@mui/material';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FormStatus } from '@/components/form-status/form-status';

import { useState, useTransition } from 'react';

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: Login) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // validate client-side
      const result = LoginSchema.safeParse(formData);
      if (!result.success) {
        setError(result.error.message);
        return;
      }
      login(formData).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        {...register('email')}
        name="email"
        render={({ field }) => (
          <TextField
            {...field}
            disabled={isPending}
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
            disabled={isPending}
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
        )}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <FormStatus status="error" message={error} />
      <FormStatus status="success" message={success} />
      <Button
        disabled={isPending}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth>
        Sign In
      </Button>
    </form>
  );
};
