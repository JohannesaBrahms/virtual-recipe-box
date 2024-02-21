import { Divider, Link, Button as MuiButton } from '@mui/material';
import NextLink from 'next/link';
import ModeSwitcher from './ModeSwitcher';

function Button(props: { href: string; label: string }) {
  return (
    <MuiButton variant="text" href={props.href} LinkComponent={NextLink}>
      {props.label}
    </MuiButton>
  );
}

export default function Header() {
  return (
    <div>
      <ModeSwitcher />
      <Button href="/" label="Home" />
      <Button href="/recipes" label="Browse Recipes" />
      <Divider />
    </div>
  );
}
