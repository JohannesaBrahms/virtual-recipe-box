'use client';

import { Divider } from '@mui/material';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';
import { logout } from '@/actions/logout';
import { AccountMenu } from '@/components/auth/account-menu';

export default function NavBar() {
  const onClick = () => {
    logout();
  };
  return (
    <nav>
      <div className={styles.container}>
        <AccountMenu />
        {/* <Button onClick={onClick}>Sign out</Button> */}
      </div>
      <Divider />
    </nav>
  );
}
