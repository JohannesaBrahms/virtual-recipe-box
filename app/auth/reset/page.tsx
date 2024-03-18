import { CardWrapper } from '@/components/auth/card-wrapper/card-wrapper';
import { ResetForm } from './_components/reset-form';

const ResetPage = () => {
  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login">
      <ResetForm />
    </CardWrapper>
  );
};

export default ResetPage;
