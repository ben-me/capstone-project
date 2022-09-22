import Link from 'next/link';
import styled from 'styled-components';

export default function RoomItem({ roomData }) {
  return (
    <RoomListElement>
      <Link href={`/rooms/${roomData.id}`} passHref>
        <RoomAnchor>{roomData.name}</RoomAnchor>
      </Link>
    </RoomListElement>
  );
}

const RoomListElement = styled.li`
  width: 375px;
  height: 46.12px;
  background: #65b5ff;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  list-style: none;
  &:hover {
    background-color: white;
  }
`;

const RoomAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  text-decoration: none;
  color: black;
`;
