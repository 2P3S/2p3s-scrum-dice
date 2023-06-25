type Member = {
  id: string;
  name: string;
  room: string;
  socketId: string;
  status: boolean;
  created_at: string;
  updated_at: string;
};

type Room = {
  id: string;
  name: string;
  members: string[];
  created_at: string;
  updated_at: string;
};

type Player = {
  name: string;
  id: string;
  card: {
    type: string;
    value: number | string;
  };
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
