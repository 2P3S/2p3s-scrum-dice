type Room = {
  id: string;
  name: string;
  votes: Vote[];
  deck: DeckType;
  members: Member[];
  created_at: string;
  updated_at: string;
};
