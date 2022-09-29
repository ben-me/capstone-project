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
  width: 350px;
  position: fixed;
  padding-left: 20px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 13px;
  bottom: 40px;
`;

const ReservationHeader = styled.h4`
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  top: 0;
  right: 5px;
`;
