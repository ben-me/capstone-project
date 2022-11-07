import Image from "next/legacy/image";
import styled from 'styled-components';
import Cross from '../public/cross.svg';

export default function DeskInfoBox({
  highlightedDesk,
  onRemoveHighlight,
  selectedDate,
}) {
  const filteredReservations = highlightedDesk.reservations.filter(
    (reservation) => {
      if (selectedDate.toISOString().substring(0, 10) === reservation.date) {
        return reservation;
      }
    }
  );

  return (
    <>
      {filteredReservations.length > 0 ? (
        <Infobox>
          <ReservationHeader>Reservations:</ReservationHeader>
          <CloseButton onClick={onRemoveHighlight}>
            <Image alt="" src={Cross}></Image>
          </CloseButton>
          {filteredReservations.map((reservation) => {
            return (
              <li key={reservation.id}>
                From {reservation.starttime} to {reservation.endtime}
                {reservation.isPrivate ? '' : ` by ${reservation.user}`}
              </li>
            );
          })}
        </Infobox>
      ) : (
        ''
      )}
    </>
  );
}

const Infobox = styled.ul`
  width: 100%;
  margin: 0;
  padding-left: 1.25rem;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const ReservationHeader = styled.h4`
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  top: 0.2rem;
  right: 0.5rem;
`;
