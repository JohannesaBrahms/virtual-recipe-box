'use server';

import { db } from '@/lib/db';
import { SettingsSchema } from '@/lib/types';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const settings = async (values: unknown) => {
  const validatedValues = SettingsSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: 'Invalid input!' };
  }

  const user = await currentUser();

  if (!user || !user.id) {
    return { error: 'Unauthorised' };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: 'Unauthorised' };
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...validatedValues.data,
    },
  });

  return { success: 'Setting updated!' };
};
