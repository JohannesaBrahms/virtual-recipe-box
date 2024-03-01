import { Divider } from '@mui/material';
import ModeSwitch from '@/components/mode-switch';
import styles from '@/app/header.module.css';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';

export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <Button href="/recipes" label="Browse" />
        <Button href="/login" label="Sign in" />
        <Button href="/register" label="Sign up" />
        <ModeSwitch />
      </div>
      <Divider />
    </>
  );
}
