import { useRouter } from 'next/router';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import DeskItem from '../../components/DeskItem';
import Header from '../../components/Header';
import { getAllRooms, getRoomById } from '../../services/roomService';

export async function getStaticPaths() {
  const allRooms = await getAllRooms();
  const paths = allRooms.map((rooms) => {
    return { params: { roomId: rooms.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const roomId = context.params.roomId;
  const roomDetails = await getRoomById(roomId);

  return {
    props: { roomDetails },
  };
}

export default function RoomPage({ roomDetails }) {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <>
      <BackButton page={'/rooms'} />
      <Header title={roomDetails.name} />
      <DeskList>
        <DeskItem />
      </DeskList>
    </>
  );
}

const DeskList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 51px;
  margin: 2.7em auto;
  width: 375px;
  left: 26px;
`;
