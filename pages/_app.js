import { useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { getAllRooms, getReservationByUser } from '../services/roomService';

function MyApp({ Component, pageProps }) {
  const [userReservations, setUserReservations] = useState(() =>
    getReservationByUser()
  );
  const [allRooms, setAllRooms] = useState(() => getAllRooms());

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allRooms={allRooms}
        onSetAllRooms={setAllRooms}
        userReservations={userReservations}
        onSetUserReservations={setUserReservations}
      />
    </>
  );
}

export default MyApp;
