'use client';

import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';
import { RoleGate } from './_components/role-gate';
import { FormStatus } from '@/components/form-status/form-status';
import { UserRole } from '@prisma/client';
import { Button } from '@/components/button';

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        console.log('okay');
      } else {
        console.log('forbidden');
      }
    });
  };

  return (
    <div className={styles.container}>
      <CardWrapper headerLabel="Admin" backButtonHref="" backButtonLabel="">
        <>
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormStatus status="success" message="You are allowed to see this content!" />
          </RoleGate>
          <div className={styles.section}>
            <p>Admin-only API route</p>
            <Button variant="contained" onClick={onApiRouteClick}>
              Click to test
            </Button>
          </div>
          <div className={styles.section}>
            <p>Admin-only Server Action</p>
            <Button variant="contained">Click to test</Button>
          </div>
        </>
      </CardWrapper>
    </div>
  );
};

export default AdminPage;
