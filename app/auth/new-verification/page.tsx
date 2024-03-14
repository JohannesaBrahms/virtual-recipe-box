import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import { NewVerificationForm } from './_components/new-verification-form';
import styles from './page.module.css';

const NewVerificationPage = () => {
  return (
    <div className={styles.container}>
      <CardWrapper
        headerLabel="Confirming your verification"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login">
        <NewVerificationForm />
      </CardWrapper>
    </div>
  );
};

export default NewVerificationPage;
