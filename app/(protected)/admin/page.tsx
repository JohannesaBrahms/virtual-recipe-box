'use client';

import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import { useCurrentRole } from '@/hooks/use-current-role';
import styles from './page.module.css';

const AdminPage = () => {
  const role = useCurrentRole();
  return (
    <div className={styles.container}>
      <div>Admin Page</div>
      <div>Current role: {role}</div>
    </div>
  );
};

export default AdminPage;
