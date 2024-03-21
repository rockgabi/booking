import NextAuth, { NextAuthOptions, getServerSession as _getServerSession } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import GithubProvider from 'next-auth/providers/github';

import sanityClient from './sanity';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
            _id
        }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id,
        },
      };
    },
  },
};

export const handler = NextAuth(authOptions)

/**
 * Proxy function to getServerSession from next-auth to use our custom authOptions
 */
export function getServerSession() {
  return _getServerSession(authOptions)
}
