import { Button as MuiButton } from '@mui/material';
import NextLink from 'next/link';

export function Button(props: { href: string; label: string }) {
  return (
    <MuiButton variant="text" href={props.href} LinkComponent={NextLink}>
      {props.label}
    </MuiButton>
  );
}
