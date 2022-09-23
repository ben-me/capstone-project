import styled from 'styled-components';

export default function DeskItem({ deskDetails }) {
  return <Desk>{deskDetails.name}</Desk>;
}

const Desk = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 70px;
  border-radius: 7px;
  background-color: #65b5ff;
  box-shadow: 0px 4px 20px rgba(101, 181, 255, 0.4);
  font-size: 22px;
`;
