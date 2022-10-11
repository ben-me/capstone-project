import styled from 'styled-components';
import Trash from '../public/trash.svg';
import Image from 'next/image';

export default function ReservationItem({ reservation }) {
  let formattedDate = reservation.date.split('-').reverse();
  formattedDate = formattedDate.join('.');

  function deleteReservation(reservationId) {
    const roomsCopy = [...allRooms];
    roomsCopy.forEach((room) => {
      room.desks.forEach((desk) => {
        desk.reservations = desk.reservations.filter((reservation) => {
          return reservation.id !== reservationId;
        });
      });
    });
  }

  function handleClick() {
    deleteReservation(reservation.id);
  }

  return (
    <StyledListElement>
      <DateHeader>{formattedDate}</DateHeader>
      <RommHeader>{reservation.room}</RommHeader>
      <DeskHeader>{reservation.desk}</DeskHeader>
      <Reservations>
        {reservation.starttime} - {reservation.endtime}
      </Reservations>
      <DeleteButton onClick={handleClick}>
        <Image alt="trashcan" src={Trash} />
      </DeleteButton>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  margin: 0.3rem 1rem;
  border: 1px solid black;
  padding: 1rem;
  position: relative;
`;

const DateHeader = styled.h3`
  margin: 0;
`;
const RommHeader = styled.h4`
  margin: 0;
  font-size: larger;
  font-weight: 400;
  text-decoration: underline;
`;
const DeskHeader = styled.h5`
  font-size: large;
  text-decoration: underline;
  font-weight: 400;
  margin: 0;
`;
const Reservations = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 35%;
  right: 0;
`;
