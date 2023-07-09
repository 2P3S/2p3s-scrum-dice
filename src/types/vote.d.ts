type Vote = {
  name: string;
  // 개표 여부를 나타내는 상태 값
  status: boolean;
  cards: Card[];
  room: Room;
};
