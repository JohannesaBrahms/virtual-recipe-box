import NextAuth, { type DefaultSession } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/db';

import authConfig from '@/auth.config';
import { getUserById } from '@/data/user';

import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';
import { UserRole } from '@prisma/client';

declare module '@auth/core/types' {
  export type ExtendedUser = DefaultSession['user'] & {
    role: UserRole;
  };
  interface Session {
    user: ExtendedUser;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role: UserRole;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    // TODO Fix error to use our custom login page.
    // This config causes redirection to `~/api/auth/auth/login?error=OAuthAccountNotLinked`
    // instead of to `~/auth/login?error=OAuthAccountNotLinked`
    // signIn: "/auth/login",
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth w/o email verification
      if (account?.type !== 'credentials') return true;

      const existingUser = user.id ? await getUserById(user.id) : null;

      // prevent sign in w/o email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) {
          return false;
        }

        // Delete 2F confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
