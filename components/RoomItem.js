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
  width: 18.75rem;
  margin: 0 auto;
  height: 2.875rem;
  background: white;
  border: 1px solid var(--primary);
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
`;

const RoomAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary);
`;
