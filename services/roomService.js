import { nanoid } from 'nanoid';

const rooms = [
  {
    id: '1',
    name: 'Room 1',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [
          {
            id: '1',
            starttime: '08:00',
            endtime: '10:00',
            date: '2022-09-29',
            user: 'user1',
            isPrivate: false,
          },
          {
            id: '2',
            starttime: '10:00',
            endtime: '12:00',
            date: '2022-09-29',
            user: 'user1',
            isPrivate: false,
          },
          {
            id: '3',
            starttime: '12:00',
            endtime: '14:00',
            date: '2022-09-29',
            user: 'user1',
            isPrivate: false,
          },
          {
            id: '4',
            starttime: '14:00',
            endtime: '16:00',
            date: '2022-09-29',
            user: 'user1',
            isPrivate: false,
          },
        ],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [
          {
            id: '1',
            starttime: '15:00',
            endtime: '17:00',
            date: '2022-09-30',
            user: 'user2',
            isPrivate: false,
          },
        ],
      },
      {
        id: '3',
        name: 'Desk 3',
        reservations: [],
      },
      {
        id: '4',
        name: 'Desk 4',
        reservations: [],
      },
      {
        id: '5',
        name: 'Desk 5',
        reservations: [],
      },
      {
        id: '6',
        name: 'Desk 6',
        reservations: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Room 2',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
    ],
  },
  {
    id: '3',
    name: 'Room 3',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
    ],
  },
  {
    id: '4',
    name: 'Room 4',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
      {
        id: '3',
        name: 'Desk 3',
        reservations: [],
      },
      {
        id: '4',
        name: 'Desk 4',
        reservations: [],
      },
    ],
  },
  {
    id: '5',
    name: 'Room 5',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
      {
        id: '3',
        name: 'Desk 3',
        reservations: [],
      },
    ],
  },
  {
    id: '6',
    name: 'Room 6',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
    ],
  },
  {
    id: '7',
    name: 'Room 7',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
    ],
  },
  {
    id: '8',
    name: 'Room 8',
    desks: [
      {
        id: '1',
        name: 'Desk 1',
        reservations: [],
      },
      {
        id: '2',
        name: 'Desk 2',
        reservations: [],
      },
    ],
  },
];

export function getAllRooms() {
  return rooms;
}

export function getRoomById(id) {
  return rooms.find((room) => room.id === id);
}

export function addNewReservation(roomID, deskID, reservation) {
  const singleRoom = rooms.find((room) => room.id === roomID);
  const singleDesk = singleRoom.desks.find((desk) => desk.id === deskID);
  console.log(singleDesk);

  singleDesk.reservations.push({ id: nanoid(), ...reservation });
  console.log(singleDesk.reservations);
  // if (calculateBlockedTimes(singleDesk, reservation)) {
  //   alert('Invalid reservation time');
  // } else {

  // }
}

function calculateBlockedTimes(desk, newReservation) {
  const dateSpecifcReservations = desk.reservations.filter(
    (reservation) => reservation.date === newReservation.date
  );
  if (dateSpecifcReservations.length > 0) {
    const overLappingReservations = dateSpecifcReservations?.filter(
      (reservation) => {
        let reservationTimeStart = reservation.starttime.split(':');
        reservationTimeStart =
          reservationTimeStart[0] * 60 + reservationTimeStart[1];
        let reservationTimeEnd = reservation.endtime.split(':');
        reservationTimeEnd = reservationTimeEnd[0] * 60 + reservationTimeEnd[1];

        let newReservationStart = newReservation.starttime.split(':');
        newReservationStart = newReservation[0] * 60 + newReservationStart[1];
        let newReservationEnd = newReservation.endtime.split(':');
        newReservationEnd = newReservationEnd[0] * 60 + newReservationEnd[1];

        if (
          (reservationTimeStart <= newReservationStart &&
            newReservationStart <= reservationTimeEnd) ||
          (reservationTimeStart <= newReservationEnd &&
            newReservationEnd <= reservationTimeEnd)
        ) {
          return reservation;
        } else {
          return;
        }
      }
    );
    if (overLappingReservations.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

// const reservationDate = reservation.date.split('-');

// const startDate = new Date(
//   reservationDate[0],
//   reservationDate[1],
//   reservationDate[2],
//   reservationTimeStart[0],
//   reservationTimeStart[1],
//   0
// );

// const endDate = new Date(
//   reservationDate[0],
//   reservationDate[1],
//   reservationDate[2],
//   reservationTimeEnd[0],
//   reservationTimeEnd[1],
//   0
