import { Button as MuiButton, ButtonProps as MaterialButtonProps } from '@mui/material';
import NextLink from 'next/link';

export type ButtonProps = MaterialButtonProps & {
  isDisabled?: boolean;
  icon?: JSX.Element;
  children: React.ReactNode;
};

export function Button({ isDisabled, icon, children, ...props }: ButtonProps) {
  return (
    <MuiButton startIcon={icon} disabled={isDisabled} LinkComponent={NextLink} {...props}>
      {children}
    </MuiButton>
  );
}
