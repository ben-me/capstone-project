import styled from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';
import Header from '../components/Header';
import getAllRooms from '../services/roomService';
import ReservationItem from '../components/ReservationItem';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const rooms = await getAllRooms();
  return {
    props: {
      rooms,
    },
  };
}

export default function Reservations({ rooms }) {
  const [myReservationList, setMyReservationList] = useState([]);

  useEffect(() => {
    const date = new Date().toISOString().substring(0, 10);
    const userReservations = [];
    rooms.map((room) => {
      room.desks.map((desk) => {
        desk.reservations.map((reservation) => {
          const today = Date.parse(date);
          const resDate = Date.parse(reservation.date);
          if (reservation.user === 'user1' && resDate >= today) {
            reservation.room = room.name;
            reservation.desk = desk.name;
            userReservations.push(reservation);
          }
        });
      });
    });

    userReservations.sort((a, b) => {
      a = a.date.split('-').join('');
      b = b.date.split('-').join('');
      return a.localeCompare(b);
    });
    setMyReservationList(userReservations);
  }, [rooms]);
  return (
    <>
      <BurgerMenu />
      <Header title="My Reservations" />
      <ReservationList>
        {myReservationList.map((reservation) => (
          <ReservationItem
            key={reservation.id}
            reservation={reservation}
            myReservationList={myReservationList}
            onSetMyReservationList={setMyReservationList}
          />
        ))}
      </ReservationList>
    </>
  );
}

const ReservationList = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
`;
