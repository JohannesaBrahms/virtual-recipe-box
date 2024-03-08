'use server';

import { signIn } from '@/auth';
import { LoginSchema, Login } from '@/lib/types';
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
