import { useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { getReservationByUser } from '../services/roomService';

function MyApp({ Component, pageProps }) {
  const [userReservations, setUserReservations] = useState(() =>
    getReservationByUser()
  );

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        userReservations={userReservations}
        setUserReservations={setUserReservations}
      />
    </>
  );
}

export default MyApp;
