'use server';

import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/tokens';
import { sendVerificationEmail, sendTwoFactorEmail } from '@/lib/mail';
import { LoginSchema } from '@/lib/types';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (login: unknown) => {
  const validatedFields = LoginSchema.safeParse(login);

  if (!validatedFields.success) {
    let errorMessage = '';

    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
    });

    // const serverErrors = Object.fromEntries(
    //   result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    // );

    return {
      error: errorMessage,
    };
  }
  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email does not exist!' };
  }
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: 'Confirmation email sent!' };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    const twoFactorToken = await generateTwoFactorToken(existingUser.email);
    await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token);

    return { twoFactor: true };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
