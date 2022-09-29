import Image from 'next/image';
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
  width: 21.875rem;
  position: fixed;
  padding-left: 1.25rem;
  transform: translate(-50%);
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 50%;
  bottom: 3.75rem;
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
  top: 0;
  right: 0.313rem;
`;
