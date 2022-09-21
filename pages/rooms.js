import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import backArrow from '../public/backarrow.png';

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
      <Link href="/" passHref>
        <BackAnchor>
          <Image alt="backbutton" src={backArrow} />
        </BackAnchor>
      </Link>

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
  /* position: absolute; */
  margin: 2.7em auto;
  width: 375px;
  left: 26px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`;

const BackAnchor = styled.a`
  display: inline-block;
  position: absolute;
  left: 0px;
  z-index: 1;
  top: 20px;
`;
