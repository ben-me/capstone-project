import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

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
      <BackButton />
      <RoomList>
        <Header>All Rooms</Header>
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
  margin: 2.7em auto;
  width: 375px;
  left: 26px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`;
