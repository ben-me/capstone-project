import styled from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';
import Header from '../components/Header';
import ReservationItem from '../components/ReservationItem';
import { getReservationByUser } from '../services/roomService';

export async function getServerSideProps() {
  const today = new Date();
  const givenDate = today.toISOString().substring(0, 10);
  const foundReservations = await getReservationByUser(givenDate);
  return {
    props: {
      foundReservations,
    },
  };
}

export default function Reservations({ foundReservations }) {
  console.log(foundReservations);
  return (
    <>
      <BurgerMenu />
      <Header title="My Reservations" />
      <ReservationList>
        {foundReservations.map((reservation) => (
          <ReservationItem key={reservation.id} reservation={reservation} />
        ))}
      </ReservationList>
    </>
  );
}

const ReservationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;