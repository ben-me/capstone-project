import { useState } from 'react';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Calendar from '../../components/Calendar';
import DeskItem from '../../components/DeskItem';
import Header from '../../components/Header';
import DeskInfoBox from '../../components/DeskInfoBox';
import { getAllRooms, getRoomById } from '../../services/roomService';
import ReserveDeskForm from '../../components/ReserveDeskForm';
import BurgerMenu from '../../components/BurgerMenu';

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

export default function RoomPage({
  roomDetails,
  userReservations,
  setUserReservations,
  allRooms,
  setAllRooms,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailsWindowActive, setDetailsWindowActive] = useState(false);
  const [highlightedDesk, setHighlightedDesk] = useState(null);
  const [reserveWindowActive, setReserveWindowActive] = useState(false);
  const roomIndex = allRooms.map((room) => room.id).indexOf(roomDetails.id);
  const currentRoom = allRooms[roomIndex];

  function addReservation(newReservation, deskID) {
    const singleDesk = currentRoom.desks.find((desk) => desk.id === deskID);
    const deskIndex = allRooms[roomIndex].desks
      .map((desk) => desk.id)
      .indexOf(deskID);
    const reservationDates = singleDesk.reservations.filter(
      (reservation) => reservation.date === newReservation.date
    );
    const newResStart = getTimeFromString(newReservation.starttime);
    const newResEnd = getTimeFromString(newReservation.endtime);
    console.log('Start' + newResStart);
    console.log('End ' + newResEnd);

    const overlappingReservations = reservationDates.filter((reservation) => {
      const currentResStart = getTimeFromString(reservation.starttime);
      const currentResEnd = getTimeFromString(reservation.endtime);
      if (
        (currentResStart < newResStart && newResStart < currentResEnd) ||
        (currentResStart < newResEnd && newResEnd < currentResEnd) ||
        (currentResStart >= newResStart && currentResEnd >= newResEnd) ||
        (currentResStart >= newResStart && currentResEnd <= newResEnd)
      ) {
        return reservation;
      }
    });

    if (newResStart > newResEnd || overlappingReservations.length > 0) {
      alert(
        "Invalid entry. Only reserve free timeslots between 06:00 and 20:00 o'clock"
      );
    } else {
      const allRoomCopy = [...allRooms];
      allRoomCopy[roomIndex].desks[deskIndex].reservations.push(newReservation);
      setAllRooms(allRoomCopy);
      console.log(overlappingReservations);
    }
  }

  function changeDate(date) {
    setSelectedDate(date);
    removeHighlight();
  }

  function showDetails(selectedDesk) {
    if (detailsWindowActive) {
      if (highlightedDesk?.id === selectedDesk.id) {
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
  function getTimeFromString(string) {
    const splitTime = string.split(':');
    const timeInMinutes = splitTime[0] * 60 + splitTime[1];
    return Number(timeInMinutes);
  }

  function removeHighlight() {
    setHighlightedDesk(null);
    setDetailsWindowActive(false);
    setReserveWindowActive(false);
  }

  return (
    <>
      <BackButton page={'/rooms'} />
      <BurgerMenu />
      <Header title={allRooms[roomIndex].name} />
      <Calendar onChangeDate={changeDate} stateDate={selectedDate} />
      <DeskList>
        {allRooms[roomIndex].desks.map((desk) => (
          <DeskItem
            key={desk.id}
            deskDetails={desk}
            onShowDetails={showDetails}
            currentHighlightedDesk={highlightedDesk?.id}
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
            allRooms={allRooms}
            onAddReservation={addReservation}
            userReservations={userReservations}
            setUserReservations={setUserReservations}
            selectedRoom={allRooms[roomIndex]}
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
    </>
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
