'use client';

import BeatLoader from 'react-spinners/BeatLoader';
import styles from '../page.module.css';

import { useSearchParams } from 'next/navigation';

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div className={styles.container}>
      Verification Form with token: {token}
      <BeatLoader />
    </div>
  );
};
