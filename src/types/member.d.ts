type Member = {
  id: string;
  name: string;
  room: string;
  socketId: string;
  status: boolean;
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
