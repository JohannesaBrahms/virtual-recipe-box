import { Typography } from '@mui/material';
import styles from './page.module.css';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Logo />
        <Typography variant="h3">Tiganj</Typography>
      </div>
      <Typography variant="body1">One stop shop for all your meal-planning needs</Typography>
      <Button href="/register">Let&apos;s Get cooking</Button>
    </main>
  );
}
