import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';
import { RegisterForm } from './_components/register-form';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showSocial>
        <RegisterForm />
      </CardWrapper>
    </div>
  );
};

export default RegisterPage;
