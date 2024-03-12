import { ErrorCard } from '@/components/auth/error-card/error-card';
import styles from './page.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <ErrorCard />
    </div>
  );
};

export default ErrorPage;
