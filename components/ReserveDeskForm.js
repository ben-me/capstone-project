import { nanoid } from 'nanoid';
import styled from 'styled-components';

export default function ReserveDeskForm({
  selectedDesk,
  reserveWindowControl,
  selectedDate,
  selectedRoom,
  setUserReservations,
  userReservations,
  onAddReservation,
}) {
  function handleClick(event) {
    event.preventDefault();
    reserveWindowControl(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputStartTime = form.starttime.value;
    const inputEndTime = form.endtime.value;
    const privateReservation = form.private.checked;

    const newReservation = {
      id: nanoid(),
      starttime: inputStartTime,
      endtime: inputEndTime,
      date: selectedDate.toISOString().substring(0, 10),
      user: 'user1',
      isPrivate: privateReservation,
    };
    setUserReservations([
      ...userReservations,
      {
        desk: selectedDesk.name,
        room: selectedRoom.name,
        ...newReservation,
      },
    ]);
    onAddReservation(newReservation, selectedDesk.id);
    form.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ReserveHeader>Reserve {selectedDesk?.name}</ReserveHeader>
      <StyledBigLabel htmlFor="starttime">Start Time:</StyledBigLabel>
      <StyledBigInput
        type="time"
        id="starttime"
        name="starttime"
        min="06:00"
        max="20:01"
        required
      />
      <StyledBigLabel htmlFor="endtime">End Time:</StyledBigLabel>
      <StyledBigInput
        type="time"
        id="endtime"
        name="endtime"
        min="06:00"
        max="20:01"
        required
      />
      <PrivateInput type="checkbox" name="private" id="private" />
      <PrivateLabel htmlFor="private">Private reservation</PrivateLabel>
      <CancelButton type="button" onClick={handleClick}>
        Cancel
      </CancelButton>
      <ReserveButton type="submit">Reserve</ReserveButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1rem auto auto auto;
  grid-row-gap: 0.3rem;
  background-color: rgba(101, 181, 255, 0.8);
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledBigLabel = styled.label`
  grid-column: span 2;
`;

const StyledBigInput = styled.input`
  text-align: center;
  grid-column: span 2;
`;

const ReserveHeader = styled.h3`
  grid-column: span 3;
  margin: 0;
  text-decoration: underline;
`;

const ReserveButton = styled.button`
  grid-column: span 2;
  grid-row-start: 5;
  border: none;
  height: 2rem;
  width: 7rem;
  border-radius: 1rem;
  background-color: rgba(77, 255, 73, 0.7);
  margin-top: 0.5rem;
  font-size: 1.2rem;
  justify-self: center;
`;

const CancelButton = styled(ReserveButton)`
  background-color: rgba(255, 74, 74, 0.7);
`;

const PrivateInput = styled.input`
  grid-row-start: 4;
  margin-left: 0;
`;

const PrivateLabel = styled.label`
  grid-column-start: 2;
  grid-column: span 3;
  grid-row-start: 4;
  flex-grow: 1;
`;
