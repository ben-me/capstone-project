import { useRouter } from 'next/router';
import { getRoomById } from '../../services/roomService';

export default function RoomPage() {
  const router = useRouter();
  const { roomId } = router.query;
  const roomData = getRoomById(roomId);
  console.log(roomData);

  return <p>This is Room {roomId}</p>;
}
