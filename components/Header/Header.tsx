import { Divider } from '@mui/material';
import ModeSwitch from '../mode-switch';
import styles from './header.module.css';
import { Button } from '../button';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Button href="/" label="Home" />
        <Button href="/recipes" label="Browse" />
        <Button href="/login" label="Sign in" />
        <ModeSwitch />
      </div>
      <Divider />
    </>
  );
}
