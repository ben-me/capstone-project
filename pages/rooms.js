import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';

export function getServerSideProps() {
  const rooms = getAllRooms();
  return {
    props: {
      rooms,
    },
  };
}

export default function Rooms({ rooms }) {
  return (
    <>
      <Header>All Rooms</Header>
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
  align-items: center;
  padding: 0;
  gap: 51px;
  position: absolute;
  width: 375px;
  height: 819.01px;
  left: 26px;
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 0px;
`;
