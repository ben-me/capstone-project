import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import BurgerMenu from '../components/BurgerMenu';

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
      <BurgerMenu />
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
  gap: 2.188rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  width: 23.438rem;
  left: 1.625rem;
`;
