import { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Calendar from '../../components/Calendar';
import DeskItem from '../../components/DeskItem';
import Header from '../../components/Header';
import DeskInfoBox from '../../components/DeskInfoBox';
import getAllRooms, { getRoomById } from '../../services/roomService';
import ReserveDeskForm from '../../components/ReserveDeskForm';
import BurgerMenu from '../../components/BurgerMenu';
import useSWR, { SWRConfig } from 'swr';

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
    props: {
      roomDetails,
    },
  };
}

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function RoomPage({ roomDetails }) {
  const { data, error } = useSWR(`/api/rooms/${roomDetails.id}`, fetcher);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailsWindowActive, setDetailsWindowActive] = useState(false);
  const [highlightedDesk, setHighlightedDesk] = useState(null);
  const [reserveWindowActive, setReserveWindowActive] = useState(false);

  function changeDate(date) {
    setSelectedDate(date);
    removeHighlight();
  }

  function showDetails(selectedDesk) {
    if (detailsWindowActive) {
      if (highlightedDesk?.name === selectedDesk.name) {
        setDetailsWindowActive(false);
        setHighlightedDesk(null);
        setReserveWindowActive(false);
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
    setReserveWindowActive(false);
  }

  return (
    <SWRConfig value={roomDetails}>
      <BackButton page={'/rooms'} />
      <BurgerMenu />
      <Header title={roomDetails.name} />
      <Calendar onChangeDate={changeDate} stateDate={selectedDate} />
      <DeskList>
        {data?.desks.map((desk) => (
          <DeskItem
            key={desk.name}
            deskDetails={desk}
            onShowDetails={showDetails}
            currentHighlightedDesk={highlightedDesk?.name}
          />
        ))}
      </DeskList>
      <BoxContainer>
        {detailsWindowActive ? (
          <DeskInfoBox
            highlightedDesk={highlightedDesk}
            onRemoveHighlight={removeHighlight}
            selectedDate={selectedDate}
          />
        ) : (
          ''
        )}
        {reserveWindowActive ? (
          <ReserveDeskForm
            allRooms={roomDetails}
            selectedRoom={roomDetails.id}
            selectedDesk={highlightedDesk}
            reserveWindowControl={setReserveWindowActive}
            selectedDate={selectedDate}
          />
        ) : (
          <ReserveButton
            type="button"
            onClick={() => {
              if (highlightedDesk && detailsWindowActive) {
                setReserveWindowActive(true);
              }
            }}
          >
            Reserve
          </ReserveButton>
        )}
      </BoxContainer>
    </SWRConfig>
  );
}

const DeskList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 1.4rem;
  margin: 0 auto;
  padding: 0;
`;

const ReserveButton = styled.button`
  height: 2.5rem;
  width: 100%;
  background-color: var(--primary);
  box-shadow: 0px 4px 4px var(--primary);
  border-radius: 23px;
  border: none;
  color: white;
  font-size: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  width: 18em;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.4rem;
  gap: 1rem;
`;
