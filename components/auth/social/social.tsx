'use client';

import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/button';
import styles from '@/components/auth/social/social.module.css';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className={styles.container}>
      <Button variant="outlined" fullWidth onClick={() => onClick('google')}>
        <FcGoogle />
      </Button>
      <Button variant="outlined" fullWidth onClick={() => onClick('github')}>
        <FaGithub />
      </Button>
    </div>
  );
};
