/**
 * FIBONACCI_NUMBERS: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 * MODIFIED_FIBONACCI_NUMBERS: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100
 */
type DeckType = 'FIBONACCI_NUMBERS' | 'MODIFIED_FIBONACCI_NUMBERS';

type CardGroup = {
  title: DeckType;
  cards: number[];
  selected: boolean;
};

type OptionCard = {
  name: string;
  emoji: string;
  class: string;
  selected: boolean;
};

// 포커보드에 선택 가능한 카드 타입
type CardType = 'poker' | 'option';

// 포커보드에 선택된 카드 타입
type SelectedCard = {
  type: CardType;
  value: number | string;
};
