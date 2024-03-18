import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import { NewPasswordForm } from './_components/new-password-form';

const NewPasswordPage = () => {
  return (
    <CardWrapper
      headerLabel="Reset password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login">
      <NewPasswordForm />
    </CardWrapper>
  );
};

export default NewPasswordPage;
