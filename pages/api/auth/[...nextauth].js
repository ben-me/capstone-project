import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import getUser from '../../../services/userServices';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const name = credentials.username;
        const password = credentials.password;
        const user = await getUser(name, password);
        if (!user) {
          console.log('Error');
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    callbacks: {
      async session({ session, token, user }) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;
        session.user.name = token.name;
        return session;
      },
    },
  },
};
export default NextAuth(authOptions);
