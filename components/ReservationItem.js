import styled from 'styled-components';

export default function ReservationItem({ reservation }) {
  return (
    <StyledListElement>
      <DateHeader>{reservation.date}</DateHeader>
      <RommHeader>{reservation.room}</RommHeader>
      <DeskHeader>{reservation.desk}</DeskHeader>
      <Reservations>
        {reservation.starttime} - {reservation.endtime}
      </Reservations>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  margin: 1rem;
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
