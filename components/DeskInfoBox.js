import styled from 'styled-components';

export default function DeskInfoBox({ highlightedDesk }) {
  console.log(highlightedDesk);
  const reservationArray = highlightedDesk.reservations;
  console.log(reservationArray);

  return (
    <>
      {reservationArray.length > 0 ? (
        <Infobox>
          <ReservationHeader>Reservations:</ReservationHeader>
          {reservationArray.map((reservation) => {
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
