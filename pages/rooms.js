import RoomItem from '../components/RoomItem';
import { getAllRooms } from '../services/roomService';
import styled from 'styled-components';
import Link from 'next/link';

export function getStaticProps() {
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
      <Link href="/">
        <StyleSVG
          width="17"
          height="34"
          viewBox="0 0 17 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.27 33.3333C13.9214 33.3345 13.577 33.2576 13.262 33.1082C12.9471 32.9588 12.6696 32.7407 12.45 32.47L1.18001 18.47C0.836815 18.0525 0.6492 17.5288 0.6492 16.9883C0.6492 16.4479 0.836815 15.9242 1.18001 15.5067L12.8467 1.50668C13.2427 1.03017 13.8119 0.730517 14.4288 0.673631C15.0458 0.616745 15.6602 0.807289 16.1367 1.20335C16.6132 1.5994 16.9128 2.16853 16.9697 2.78552C17.0266 3.40252 16.8361 4.01684 16.44 4.49335L6.01 17L16.09 29.5067C16.3753 29.8492 16.5566 30.2662 16.6123 30.7085C16.668 31.1508 16.5959 31.5998 16.4044 32.0024C16.2129 32.4049 15.9102 32.7442 15.5319 32.9801C15.1537 33.216 14.7158 33.3386 14.27 33.3333Z"
            fill="#CCCCCC"
          />
        </StyleSVG>
      </Link>
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

const StyleSVG = styled.svg`
  position: absolute;
  left: 20px;
  top: 30px;
`;
