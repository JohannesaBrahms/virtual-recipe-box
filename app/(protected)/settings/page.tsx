'use client';

import { useSession } from 'next-auth/react';

const SettingsPage = () => {
  const session = useSession();

  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
