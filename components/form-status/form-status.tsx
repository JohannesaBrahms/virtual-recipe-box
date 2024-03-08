import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import styles from './form-status.module.css';
import { Typography } from '@mui/material';

interface FormStatusProps {
  status: 'success' | 'error';
  message?: string;
}

export const FormStatus = ({ status, message }: FormStatusProps) => {
  if (!message) return null;

  return (
    <div className={status === 'error' ? styles.error : styles.success}>
      {status === 'error' ? (
        <ExclamationTriangleIcon className={styles.icon} />
      ) : (
        <CheckCircleIcon className={styles.icon} />
      )}
      <Typography>{message}</Typography>
    </div>
  );
};
