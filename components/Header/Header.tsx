import { Divider } from '@mui/material';
import ModeSwitch from '../ModeSwitch';
import styles from './Header.module.css';
import { Button } from '../Button';

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
