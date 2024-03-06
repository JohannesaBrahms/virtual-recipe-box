import { Typography } from '@mui/material';
import styles from './header.module.css';

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="h3">Auth</Typography>
      <p>{label}</p>
    </div>
  );
};
