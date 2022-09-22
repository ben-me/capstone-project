import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Header from '../components/Header';

export async function getStaticProps() {
  const rooms = await getAllRooms();
  return {
    props: {
      rooms,
    },
  };
}

export default function Rooms({ rooms }) {
  return (
    <>
      <BackButton page={'/'} />
      <Header title={'All Rooms'} />
      <RoomList>
        {rooms.map((room) => {
          return <RoomItem key={room.id} roomData={room} />;
        })}
      </RoomList>
    </>
  );
}

const RoomList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 51px;
  margin: 0 auto;
  width: 375px;
  left: 26px;
`;
