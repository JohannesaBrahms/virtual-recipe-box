'use client';

import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';
import { RoleGate } from './_components/role-gate';
import { FormStatus } from '@/components/form-status/form-status';
import { UserRole } from '@prisma/client';

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <CardWrapper headerLabel="Admin" backButtonHref="" backButtonLabel="">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormStatus status="success" message="You are allowed to see this content!" />
        </RoleGate>
      </CardWrapper>
    </div>
  );
};

export default AdminPage;
