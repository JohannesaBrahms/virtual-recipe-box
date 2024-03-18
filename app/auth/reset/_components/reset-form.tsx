'use client';

import { Button } from '@/components/button';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Reset, ResetSchema } from '@/lib/types';
import { reset } from '@/actions/reset';

import { TextField } from '@mui/material';
import { FormStatus } from '@/components/form-status/form-status';

import { useState, useTransition } from 'react';

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Reset>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (formData: Reset) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // validate client-side
      const result = ResetSchema.safeParse(formData);
      if (!result.success) {
        setError(result.error.message);
        return;
      }
      reset(formData).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <FormStatus status="error" message={error} />
      <FormStatus status="success" message={success} />
      <Button
        disabled={isPending}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth>
        Send reset email
      </Button>
    </form>
  );
};
