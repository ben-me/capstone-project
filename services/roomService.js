const rooms = [
  {
    id: '1',
    name: 'Room 1',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [
          {
            starttime: '12:00',
            endtime: '14:00',
            user: 'user1',
            isPrivate: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [
          {
            starttime: '15:00',
            endtime: '17:00',
            user: 'user2',
            isPrivate: false,
          },
        ],
      },
      {
        id: 3,
        name: 'Desk 3',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 4,
        name: 'Desk 4',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 5,
        name: 'Desk 5',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 6,
        name: 'Desk 6',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '2',
    name: 'Room 2',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '3',
    name: 'Room 3',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '4',
    name: 'Room 4',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 3,
        name: 'Desk 3',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 4,
        name: 'Desk 4',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '5',
    name: 'Room 5',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 3,
        name: 'Desk 3',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '6',
    name: 'Room 6',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '7',
    name: 'Room 7',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
      },
    ],
  },
  {
    id: '8',
    name: 'Room 8',
    desks: [
      {
        id: 1,
        name: 'Desk 1',
        isSelected: false,
        reservations: [{}],
      },
      {
        id: 2,
        name: 'Desk 2',
        isSelected: false,
        reservations: [{}],
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
