'use server';

import { ResetSchema } from '@/lib/types';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

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

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);

  return {
    success: 'Reset email sent!',
  };
};
