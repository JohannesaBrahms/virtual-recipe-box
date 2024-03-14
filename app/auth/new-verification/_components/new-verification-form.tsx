'use client';

import BeatLoader from 'react-spinners/BeatLoader';
import styles from '../page.module.css';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { newVerification } from '@/actions/new-verification';
import { FormStatus } from '@/components/form-status/form-status';

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token!');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className={styles.container}>
      {!success && !error && <BeatLoader />}
      <FormStatus status="error" message={error} />
      <FormStatus status="success" message={success} />
    </div>
  );
};
