'use server';

import { getUserByEmail } from '@/data/user';
import { ResetSchema } from '@/lib/types';

export const reset = async (data: unknown) => {
  const validatedFields = ResetSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid input!' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      error: 'No user associated with this email.',
    };
  }

  return {
    success: 'Reset email sent!',
  };
};
