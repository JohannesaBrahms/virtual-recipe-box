'use client';

import { newPassword } from '@/actions/new-password';
import { Button } from '@/components/button';
import { FormStatus } from '@/components/form-status/form-status';
import { NewPassword, NewPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPassword>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = async (formData: NewPassword) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // validate client-side
      const result = NewPasswordSchema.safeParse(formData);
      if (!result.success) {
        setError(result.error.message);
        return;
      }
      newPassword(formData, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            aria-label="Password"
            fullWidth
            autoFocus
            aria-required
            placeholder="******"
            type="password"
            label="Password"
          />
        )}
      />
      {errors.password && <em>{errors.password.message}</em>}
      {/* TODO Add repeat password */}
      <FormStatus status="error" message={error} />
      <FormStatus status="success" message={success} />
      <Button
        disabled={isPending}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth>
        Reset password
      </Button>
    </form>
  );
};
