import { useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { getAllRooms } from '../services/roomService';

function MyApp({ Component, pageProps }) {
  const [allRooms, setAllRooms] = useState(() => getAllRooms());

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} allRooms={allRooms} setAllRooms={setAllRooms} />
    </>
  );
}

export default MyApp;
