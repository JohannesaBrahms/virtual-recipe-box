import { Typography } from '@mui/material';

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div>
      <Typography variant="h2">Auth</Typography>
      <p>{label}</p>
    </div>
  );
};
