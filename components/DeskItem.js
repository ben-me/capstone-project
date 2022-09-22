import styled from 'styled-components';

export default function DeskItem({ deskDetails }) {
  return <Desk>{deskDetails.name}</Desk>;
}

const Desk = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 81px;
  border: 1px rgba(101, 181, 255, 1) solid;
  border-radius: 7px;
`;
