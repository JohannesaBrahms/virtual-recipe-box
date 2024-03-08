import { Divider } from '@mui/material';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';
import { signOut } from '@/auth';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <form
          action={async () => {
            'use server';

            await signOut();
          }}>
          <Button type="submit">Sign out</Button>
        </form>
      </div>
      <Divider />
    </nav>
  );
}
