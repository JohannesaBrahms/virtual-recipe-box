'use client';

import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';
import { Button } from '@/components/button';
import { settings } from '@/actions/settings';
import { useTransition } from 'react';

const SettingsPage = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({
        name: 'New Name',
      });
    });
  };

  return (
    <div className={styles.container}>
      <CardWrapper headerLabel="Settings" backButtonLabel="" backButtonHref="">
        <>
          <Button disabled={isPending} variant="contained" onClick={onClick}>
            Update Name
          </Button>
        </>
      </CardWrapper>
    </div>
  );
};

export default SettingsPage;
