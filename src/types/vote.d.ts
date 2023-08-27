type Vote = {
  cards: Record<Member['id'], Card> | null;
  created_at: string;
  id: string;
  name: string;
  room: string | Room;
  // 개표 여부를 나타내는 상태 값
  status: boolean;
  updated_at: string;
};
