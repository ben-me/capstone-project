import { GlobalStyle } from '../components/GlobalStyle';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider sessions={session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
