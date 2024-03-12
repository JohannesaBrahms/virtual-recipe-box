import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './error-card.module.css';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login">
      <div className={styles.container}>
        <FaExclamationTriangle />
      </div>
    </CardWrapper>
  );
};
