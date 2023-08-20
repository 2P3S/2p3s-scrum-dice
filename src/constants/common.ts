export const FIBONACCI_NUMBERS = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89'];
export const MODIFIED_FIBONACCI_NUMBERS = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
export const DECK_TYPES: DeckType[] = ['FIBONACCI_NUMBERS', 'MODIFIED_FIBONACCI_NUMBERS'];
export const NOT_COST_CONTENTS: NotCostContent[] = ['coffee', 'question', 'king', 'break'];

export const OPTION_CARDS: OptionCard[] = [
  {
    name: 'break',
    emoji: '🐣',
    class: 'bg-yellow-400 hover:bg-yellow-400',
  },
  {
    name: 'coffee',
    emoji: '☕',
    class: 'bg-yellow-900 hover:bg-yellow-900',
  },
  {
    name: 'king',
    emoji: '👑',
    class: 'bg-emerald-700 hover:bg-emerald-700',
  },
  {
    name: 'question',
    emoji: '？',
    class: 'bg-red-600 hover:bg-red-600 text-white font-extrabold',
  },
];

export const CARD_TYPE_COST = 'cost-type'