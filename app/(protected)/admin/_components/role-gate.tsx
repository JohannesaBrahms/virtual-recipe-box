'use client';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

import { FormStatus } from '@/components/form-status/form-status';
import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();
  if (role != allowedRole) {
    return <FormStatus status="error" message="You don't have permission to view this content!" />;
  }
  return <>{children}</>;
};
