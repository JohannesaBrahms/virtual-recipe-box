import { Link as MuiLink, LinkProps as MaterialLinkProps } from '@mui/material';
import NextLink from 'next/link';

export type LinkProps = MaterialLinkProps & {
  href: string;
  children: React.ReactNode;
};

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <MuiLink href={href} component={NextLink} color="inherit" variant="body2" {...props}>
      {children}
    </MuiLink>
  );
}
