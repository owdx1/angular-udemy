import { User } from "../types";

export const DUMMY_USERS: User[] = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
    tasks: [
      {
        id: "task1",
        title: "fucking boss",
        desc: "desceiption",
        isCompleted: true
      },
      {
        id: "task2",
        title: "cleaning house",
        desc: "desceiption",
        isCompleted: false
      },
      {
        id: "task3",
        title: "cooking food",
        desc: "desceiption",
        isCompleted: false
      }
    ]
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];