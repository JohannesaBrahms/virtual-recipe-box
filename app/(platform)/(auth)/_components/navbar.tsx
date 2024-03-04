import { Divider } from '@mui/material';
import ModeSwitch from '@/components/mode-switch';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <Button href="/login">Sign In</Button>
        <Button href="/register">Try Free</Button>
        <ModeSwitch />
      </div>
      <Divider />
    </nav>
  );
}
