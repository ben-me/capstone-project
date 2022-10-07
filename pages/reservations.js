import styled from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';
import Header from '../components/Header';
import ReservationItem from '../components/ReservationItem';

export default function Reservations({ userReservations }) {
  return (
    <>
      <BurgerMenu />
      <Header title="My Reservations" />
      <ReservationList>
        {userReservations.map((reservation) => (
          <ReservationItem key={reservation.id} reservation={reservation} />
        ))}
      </ReservationList>
    </>
  );
}

const ReservationList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;
