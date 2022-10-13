import dbConnect from '../dbConnect';
import Room from '../models/Room';

export default async function getAllRooms() {
  await dbConnect();
  const rooms = await Room.find();
  const roomArray = rooms.map(({ id, name, desks }) => {
    return {
      id,
      name,
      desks: desks.map(({ name, reservations }) => {
        return {
          name,
          reservations: reservations?.map(
            ({ starttime, endtime, date, user, isPrivate, id }) => {
              return { starttime, endtime, date, user, isPrivate, id };
            }
          ),
        };
      }),
    };
  });
  return roomArray;
}

export async function getRoomById(roomId) {
  await dbConnect();
  const room = await Room.findById(roomId);
  const { id, name, desks } = room;
  return {
    id,
    name,
    desks: desks.map(({ name, reservations }) => {
      return {
        name,
        reservations: reservations?.map(
          ({ starttime, endtime, date, user, isPrivate, id }) => {
            return { starttime, endtime, date, user, isPrivate, id };
          }
        ),
      };
    }),
  };
}

export async function deleteReservation(id) {
  await dbConnect();
  const rooms = await Room.find();
  let roomToUpdate = null;
  rooms.forEach((room) => {
    room.desks = room.desks.map((desk) => {
      desk.reservations = desk.reservations.filter((reservation) => {
        if (reservation.id === id) {
          roomToUpdate = room;
          return false;
        }
        return true;
      });
      return desk;
    });
  });
  return await roomToUpdate.save();
}
