import styles from './header.module.css';

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>{label}</p>
    </div>
  );
};
