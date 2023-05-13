export const FIBONACCI_NUMBERS = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
export const MODIFIED_FIBONACCI_NUMBERS = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

export type CustomOptionCard = {
  name: string;
  emoji: string;
  class: string;
  selected: boolean;
};

export const OPTION_CARDS: CustomOptionCard[] = [
  {
    name: 'Egg Timer',
    emoji: '🐣',
    class: 'bg-yellow-400',
    selected: true,
  },
  {
    name: 'Coffee Time',
    emoji: '☕',
    class: 'bg-[#A47C6D]',
    selected: true,
  },
  {
    name: 'King',
    emoji: '👑',
    class: 'bg-emerald-700',
    selected: true,
  },
  {
    name: 'Pass',
    emoji: '？',
    class: 'bg-red-600 text-white font-extrabold',
    selected: true,
  },
];
