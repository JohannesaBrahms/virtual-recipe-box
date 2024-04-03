'use client';

import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';
import { RoleGate } from './_components/role-gate';
import { FormStatus } from '@/components/form-status/form-status';
import { UserRole } from '@prisma/client';
import { Button } from '@/components/button';
import { toast } from 'sonner';
import { admin } from '@/actions/admin';

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('Allowed API Route!');
      } else {
        toast.error('Forbidden API Route!');
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
            <Button variant="contained" onClick={onServerActionClick}>
              Click to test
            </Button>
          </div>
        </>
      </CardWrapper>
    </div>
  );
};

export default AdminPage;
