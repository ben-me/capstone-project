const rooms = [
  {
    id: 1,
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
    ],
  },
  {
    id: 2,
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
];

export function getAllRooms() {
  return rooms;
}
