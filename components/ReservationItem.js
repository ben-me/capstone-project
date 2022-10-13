import styled from 'styled-components';
import Trash from '../public/trash.svg';
import Image from 'next/image';

export default function ReservationItem({
  reservation,
  onSetMyReservationList,
  myReservationList,
}) {
  let formattedDate = reservation.date.split('-').reverse();
  formattedDate = formattedDate.join('.');

  async function deleteReservation(deletedReservation) {
    const response = await fetch(
      `/api/rooms/desks/reservations/${deletedReservation.id}`,
      {
        method: 'DELETE',
      }
    );
    if (response.status === 200) {
      onSetMyReservationList(
        myReservationList.filter(
          (reservation) => reservation.id !== deletedReservation.id
        )
      );
    }
  }

  return (
    <StyledListElement>
      <DateHeader>{formattedDate}</DateHeader>
      <RommHeader>{reservation.room}</RommHeader>
      <DeskHeader>{reservation.desk}</DeskHeader>
      <Reservations>
        {reservation.starttime} - {reservation.endtime}
      </Reservations>
      <DeleteButton onClick={() => deleteReservation(reservation)}>
        <Image alt="trashcan" src={Trash} />
      </DeleteButton>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  margin: 0.3rem 1rem;
  border-radius: 15px;
  background-color: var(--primary);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
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
  right: 0.5rem;
`;
