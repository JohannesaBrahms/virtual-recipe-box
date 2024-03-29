'use server';

import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { NewPasswordSchema } from '@/lib/types';

import bcrypt from 'bcryptjs';

export const newPassword = async (formData: unknown, token: string | null) => {
  if (!token) {
    return { error: 'Missing token!' };
  }

  const validatedFields = NewPasswordSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: 'Input not valid!' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: 'Invalid token!' };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has expired!' };
  }
  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'Email does not exist!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Password updated!' };
};
