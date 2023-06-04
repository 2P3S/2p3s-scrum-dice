export const FIBONACCI_NUMBERS = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
export const MODIFIED_FIBONACCI_NUMBERS = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

export const OPTION_CARDS: OptionCard[] = [
  {
    name: 'Egg Timer',
    emoji: '🐣',
    class: 'bg-yellow-400 hover:bg-yellow-400',
    selected: true,
  },
  {
    name: 'Coffee Time',
    emoji: '☕',
    class: 'bg-yellow-900 hover:bg-yellow-900',
    selected: true,
  },
  {
    name: 'King',
    emoji: '👑',
    class: 'bg-emerald-700 hover:bg-emerald-700',
    selected: true,
  },
  {
    name: 'Pass',
    emoji: '？',
    class: 'bg-red-600 hover:bg-red-600 text-white font-extrabold',
    selected: true,
  },
];

// FIXME: mockup user
export const players: Player[] = [
  {
    name: '승현',
    id: '8743b52063cd84097a65d1633f5c74f5',
    card: {
      type: 'poker',
      value: 1,
    },
  },
  {
    name: '재순',
    id: 'abc2',
    card: {
      type: 'poker',
      value: 3,
    },
  },
  {
    name: '승형',
    id: 'abc3',
    card: {
      type: 'poker',
      value: 3,
    },
  },
  {
    name: '주용',
    id: 'abc4',
    card: {
      type: 'option',
      value: 'Pass',
    },
  },
  {
    name: '희수',
    id: 'abc5',
    card: {
      type: 'poker',
      value: 5,
    },
  },
  {
    name: '주용',
    id: 'abc6',
    card: {
      type: 'option',
      value: 'King',
    },
  },
];
