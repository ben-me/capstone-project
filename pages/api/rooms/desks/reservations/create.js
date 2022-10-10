import dbConnect from '../../../../../dbConnect';
import Room from '../../../../../models/Room';

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === 'POST') {
      const {
        id,
        starttime,
        endtime,
        date,
        user,
        isPrivate,
        roomID,
        deskname,
      } = await request.body;
      const newReservation = { id, starttime, endtime, date, user, isPrivate };
      const room = await Room.findById(roomID);
      const desk = await room.desks.find((desk) => desk.name === deskname);
      const reservationDates = await desk.reservations.filter(
        (reservation) => reservation.date === newReservation.date
      );
      const newResStart = getTimeFromString(newReservation.starttime);
      const newResEnd = getTimeFromString(newReservation.endtime);
      const overlappingReservations = await reservationDates.filter(
        (reservation) => {
          const currentResStart = getTimeFromString(reservation.starttime);
          const currentResEnd = getTimeFromString(reservation.endtime);
          if (
            (currentResStart < newResStart && newResStart < currentResEnd) ||
            (currentResStart < newResEnd && newResEnd < currentResEnd) ||
            (currentResStart >= newResStart && currentResEnd >= newResEnd) ||
            (currentResStart >= newResStart && currentResEnd <= newResEnd)
          ) {
            return reservation;
          }
        }
      );

      if (newResStart > newResEnd || overlappingReservations.length > 0) {
        return response.status(400).json({ message: 'Failed' });
      } else {
        await desk.reservations.push(newReservation);
        room.save();
        return response.status(200).json({ message: 'Saved reservation' });
      }
    }
  } catch (error) {}
}

function getTimeFromString(string) {
  const splitTime = string.split(':');
  const timeInMinutes = splitTime[0] * 60 + splitTime[1];
  return Number(timeInMinutes);
}
