import { getRoomById } from '../../../services/roomService';

export default async function handler(request, response) {
  try {
    if (request.method === 'GET') {
      const { id } = request.query;
      const room = await getRoomById(id);
      return response.status(200).json(room);
    }
  } catch (error) {
    console.log('Could not find room');
    console.error(error);
    return response.status(404).json({ message: 'Room not found' });
  }
}
