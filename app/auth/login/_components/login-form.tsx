'use client';

import { Button } from '@/components/button';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema, Login } from '@/lib/types';
import { login } from '@/actions/login';

import { InputAdornment, TextField } from '@mui/material';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FormStatus } from '@/components/form-status/form-status';

import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import Link from 'next/link';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with a different provider'
      : '';

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const {
    control,
    reset,
    handleSubmit,
    clearErrors,
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
      login(formData)
        .then((data) => {
          if (data?.error) {
            reset();
            setError(data.error);
          }

          if (data?.success) {
            reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((error) => {
          setError(`Something went wrong: ${error}`);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {showTwoFactor ? (
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <TextField
              {...field}
              disabled={isPending}
              margin="normal"
              id="code"
              name="code"
              aria-label="Two Factor Code"
              fullWidth
              autoFocus
              aria-required
              placeholder="123456"
              label="Two Factor Code"
            />
          )}
        />
      ) : (
        <>
          <Controller
            control={control}
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
                placeholder="example@example.com"
                type="email"
                label="Email"
              />
            )}
          />
          {errors.email && <em>{errors.email.message}</em>}
          <Controller
            control={control}
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
                aria-required
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
          {errors.password && <em>{errors.password.message}</em>}
          <Link href="/auth/reset">Forgot password?</Link>
        </>
      )}
      <FormStatus status="error" message={error || urlError} />
      <FormStatus status="success" message={success} />
      <Button
        disabled={isPending}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth>
        {showTwoFactor ? 'Confirm' : 'Sign In'}
      </Button>
    </form>
  );
};
