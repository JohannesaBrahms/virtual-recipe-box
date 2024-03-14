import styles from './layout.module.css';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthLayout;
