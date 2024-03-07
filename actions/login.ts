'use server';

import { db } from '@/lib/db';
import { LoginSchema, Login } from '@/lib/types';

export const login = async (login: unknown) => {
  const result = LoginSchema.safeParse(login);

  if (!result.success) {
    let errorMessage = '';

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
    });

    // const serverErrors = Object.fromEntries(
    //   result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    // );

    return {
      error: errorMessage,
    };
  }
  return {
    success: 'Yay!',
  };
  // try {
  //   //TODO
  //   db.account.findFirst({
  //     where: {
  //       email: result.data.email
  //     }
  //   }).then(() => {
  //     return {
  //       success: "User authenticated!"
  //     };
  //   })
  // } catch (error) {
  //   return {
  //     error: error,
  //   };
  // }
};
