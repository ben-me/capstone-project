import { deleteReservation } from '../../../../../services/roomService';

export default async function handler(request, response) {
  try {
    if (request.method === 'DELETE') {
      const { id } = await request.query;
      const room = await deleteReservation(id);
      return response
        .status(200)
        .json({ message: 'Reservation deleted', room });
    }
  } catch (error) {
    console.error(error);
    return response.status(404).json({ message: "Can't delete" });
  }
}
