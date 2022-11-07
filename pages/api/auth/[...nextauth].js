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
};
export default NextAuth(authOptions);
