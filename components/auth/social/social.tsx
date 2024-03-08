'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Button } from '@/components/button';
import styles from '@/components/auth/social/social.module.css';

export const Social = () => {
  return (
    <div className={styles.container}>
      <Button variant="outlined" fullWidth onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button variant="outlined" fullWidth onClick={() => {}}>
        <FaFacebook />
      </Button>
    </div>
  );
};
