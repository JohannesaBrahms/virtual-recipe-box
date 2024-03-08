import { LoginForm } from './_components/login-form';
import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import styles from './page.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial>
        <LoginForm />
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
