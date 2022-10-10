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
          reservations,
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
        reservations,
      };
    }),
  };
}
