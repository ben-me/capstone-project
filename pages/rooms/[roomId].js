import { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Calendar from '../../components/Calendar';
import DeskItem from '../../components/DeskItem';
import Header from '../../components/Header';
import DeskInfoBox from '../../components/DeskInfoBox';
import { getAllRooms, getRoomById } from '../../services/roomService';

export async function getStaticPaths() {
  const allRooms = await getAllRooms();
  const paths = allRooms.map((rooms) => {
    return { params: { roomId: rooms.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const roomId = context.params.roomId;
  const roomDetails = await getRoomById(roomId);

  return {
    props: { roomDetails },
  };
}

export default function RoomPage({ roomDetails }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailsWindowActive, setDetailsWindowActive] = useState(false);
  const [highlightedDesk, setHighlightedDesk] = useState(null);

  function changeDate(date) {
    setSelectedDate(date);
    removeHighlight();
  }

  function showDetails(selectedDesk) {
    if (detailsWindowActive) {
      if (highlightedDesk?.id === selectedDesk.id) {
        setDetailsWindowActive(false);
        setHighlightedDesk(null);
      } else {
        setHighlightedDesk(selectedDesk);
      }
    } else {
      setDetailsWindowActive(true);
      setHighlightedDesk(selectedDesk);
    }
  }

  function removeHighlight() {
    setHighlightedDesk(null);
    setDetailsWindowActive(false);
  }

  return (
    <>
      <BackButton page={'/rooms'} />
      <Header title={roomDetails.name} />
      <Calendar onChangeDate={changeDate} stateDate={selectedDate} />
      <DeskList>
        {roomDetails.desks.map((desk) => (
          <DeskItem
            key={desk.id}
            deskDetails={desk}
            onShowDetails={showDetails}
            currentHighlightedDesk={highlightedDesk?.id}
          />
        ))}
      </DeskList>
      {detailsWindowActive ? (
        <DeskInfoBox
          highlightedDesk={highlightedDesk}
          onRemoveHighlight={removeHighlight}
          selectedDate={selectedDate}
        ></DeskInfoBox>
      ) : (
        ''
      )}
    </>
  );
}

const DeskList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 1.4em;
  margin: 0 auto;
  padding: 0;
`;
