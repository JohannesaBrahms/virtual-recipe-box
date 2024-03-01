import { Divider } from '@mui/material';
import ModeSwitch from '@/components/mode-switch';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';

export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <Button href="/login" label="Sign in" />
        <Button href="/register" label="Try Free" />
        <ModeSwitch />
      </div>
      <Divider />
    </>
  );
}
