import NavBar from './_components/navbar';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const ProtectedLayout = async ({ children }: any) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div>
        <NavBar />
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
