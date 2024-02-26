import { Divider, Button as MuiButton } from '@mui/material';
import NextLink from 'next/link';
import ModeSwitch from '../ModeSwitch';
import styles from './Header.module.css';

function Button(props: { href: string; label: string }) {
  return (
    <MuiButton variant="text" href={props.href} LinkComponent={NextLink}>
      {props.label}
    </MuiButton>
  );
}

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Button href="/" label="Home" />
        <Button href="/recipes" label="Browse" />
        <ModeSwitch />
      </div>
      <Divider />
    </>
  );
}
