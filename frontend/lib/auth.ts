import NextAuth, { DefaultSession, NextAuthOptions, getServerSession as _getServerSession } from 'next-auth';
import { SanityAdapter } from 'next-auth-sanity';
import GithubProvider from 'next-auth/providers/github';

declare module 'next-auth' {
  interface User {
    geniusLevel?: string;
  }

  interface Session {
    user: {
      id: string;
      geniusLevel?: string;
    } & DefaultSession["user"];
  }
}

import sanityClient from '../lib/sanity';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile.name,
          image: profile.avatar_url,
          geniusLevel: 'beginner',
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log('User ', user)
      if (user) {
        token.id = user.id;
        token.geniusLevel = user.geniusLevel;
      }
      return token;
    },
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id: string, geniusLevel: string }>(
        `*[_type == "user" && email == $email][0] {
            _id,
            geniusLevel
        }`,
        { email: userEmail }
      );
      //console.log('userIdObj', userIdObj)
      const ret = {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id || token.id,
          geniusLevel: userIdObj.geniusLevel || token.geniusLevel,
        },
      };
      //console.log('ret', ret)
      return ret;
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
