import getAllRooms from '../../../services/roomService';

export default async function handler(request, response) {
  try {
    if (request.method === 'GET') {
      const rooms = await getAllRooms();
      return response.status(200).json(rooms);
    }
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: 'Error trying to get rooms' });
  }
}
