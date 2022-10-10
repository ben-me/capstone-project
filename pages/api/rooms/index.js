import dbConnect from '../../../dbConnect';
import getAllRooms from '../../../services/roomService';

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === 'GET') {
      const rooms = await getAllRooms();
      return response.status(200).json(rooms);
    }
  } catch (error) {
    console.log('Could not get new list');
    console.error(error);
  }
}
