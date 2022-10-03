import styled from 'styled-components';
import { addNewReservation } from '../services/roomService';

export default function ReserveDeskForm({
  selectedDesk,
  reserveWindowControl,
  selectedDate,
  selectedRoom,
}) {
  const today = new Date().toISOString().split('T')[0];

  function handleClick(event) {
    event.preventDefault();
    reserveWindowControl(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputStartTime = form.starttime.value;
    const inputEndTime = form.endtime.value;
    const inputDate = form.date.value;

    const newReservation = {
      starttime: inputStartTime,
      endtime: inputEndTime,
      date: inputDate,
      user: 'user1',
      isPrivate: false,
    };
    addNewReservation(selectedRoom.id, selectedDesk.id, newReservation);
    reserveWindowControl(false);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ReserveHeader>Reserve {selectedDesk?.name}</ReserveHeader>
      <label htmlFor="starttime">Start Time:</label>
      <input type="time" id="starttime" name="starttime" required />
      <label htmlFor="endtime">End Time:</label>
      <input type="time" id="endtime" name="endtime" required />
      <label htmlFor="date">Date:</label>
      <input
        min={today}
        type="date"
        id="date"
        name="date"
        required
        defaultValue={selectedDate.toISOString().substring(0, 10)}
      />
      <Cancelbutton type="button" onClick={handleClick}>
        Cancel
      </Cancelbutton>
      <ReserveButton type="submit">Reserve</ReserveButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 7rem auto;
  background-color: rgba(101, 181, 255, 0.8);
  border-radius: 22px;
  padding: 1rem;
  gap: 0.2rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ReserveHeader = styled.h3`
  grid-column: span 2;
  margin: 0;
  text-decoration: underline;
`;

const ReserveButton = styled.button`
  border: none;
  height: 2rem;
  justify-self: end;
  width: 7rem;
  border-radius: 1rem;
  background-color: rgba(77, 255, 73, 0.7);
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const Cancelbutton = styled(ReserveButton)`
  background-color: rgba(255, 74, 74, 0.7);
`;
