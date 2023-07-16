type Member = {
  id: string;
  name: string;
  room: string | Room;
  socketId: string;
  status: boolean;
  created_at: string;
  updated_at: string;
};
