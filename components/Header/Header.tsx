import { Divider } from '@mui/material';
import ModeSwitch from '../mode-switch';
import styles from './header.module.css';
import { Button } from '../button';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Button href="/">Home</Button>
        <Button href="/recipes">Browse</Button>
        <Button href="/login">Sign in</Button>
        <ModeSwitch />
      </div>
      <Divider />
    </>
  );
}
