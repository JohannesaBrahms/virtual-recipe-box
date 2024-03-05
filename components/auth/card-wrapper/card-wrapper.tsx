'use client';

import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { Header } from '@/components/auth/header';
import { Social } from '@/components/auth/social/social';
import styles from '@/components/auth/card-wrapper/card-wrapper.module.css';
import { Button } from '@/components/button';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className={styles.container}>
      <CardHeader title={<Header label={headerLabel} />}></CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardActions className={styles.actions}>
          <Social />
        </CardActions>
      )}
      {/* TODO Don't uppercase and display as link */}
      <CardActions>
        <Button href={backButtonHref}>{backButtonLabel}</Button>
      </CardActions>
    </Card>
  );
};
