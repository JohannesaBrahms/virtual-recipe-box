import { Divider } from '@mui/material';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <Logo />
        <Button href="/recipes">Browse</Button>
        <Button href="/login">Sign In</Button>
        <Button href="/register" variant="contained">
          Try Free
        </Button>
      </div>
      <Divider />
    </nav>
  );
}
