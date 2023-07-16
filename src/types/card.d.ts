/**
 * FIBONACCI_NUMBERS: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 * MODIFIED_FIBONACCI_NUMBERS: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100
 */
type DeckType = 'FIBONACCI_NUMBERS' | 'MODIFIED_FIBONACCI_NUMBERS';

/**
 * room 만들기에 사용되는 카드 그룹
 */
type CardGroup = {
  contents: CardContent[];
};

type DeckCardGroup = CardGroup & {
  deckType: DeckType;
};

type OptionCardGroup = CardGroup;

/**
 * room 생성 후 사용되는 카드
 */
type Card = {
  vote: string | Vote;
  member: string | Member;
  type: CardType;
  content: CardContent;
  // 투표 여부를 나타내는 상태 값
  status: boolean;
};

/**
 * room 생성 후 선택 가능한 카드 타입
 */
type CardType = 'cost-type' | 'not-cost-type';

/**
 * room 생성 후 선택 가능한 카드 컨텐츠
 */
type CardContent = CostContent | NotCostContent;

type CostContent = number;
type NotCostContent = 'coffee' | 'question' | 'infinity' | 'break';

/**
 * NotCostContent의 커스텀 옵션
 */
type OptionCard = {
  name: NotCostContent;
  emoji: string;
  class: string;
};

/**
 * 포커 보드에 유저의 클릭 이벤트로 인해 선택된 카드
 */
type SelectedCard = {
  type: CardType;
  content: CardContent;
};
