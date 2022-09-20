import styled from 'styled-components';

export default function RoomItem({ roomData }) {
  return <RoomButton>{roomData.name}</RoomButton>;
}

const RoomButton = styled.button`
  width: 375px;
  height: 46.12px;
  background: #65b5ff;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
