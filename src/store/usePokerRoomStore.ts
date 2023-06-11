import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

type PokerRoomState = {
  roomName: string;
  roomId: string;
  setRoomName: (roomName: string) => void;
  setRoomId: (roomId: string) => void;
};

const usePokerRoomStore = create<PokerRoomState>(set => ({
  roomName: '',
  roomId: '',
  setRoomName: roomName => {
    set({ roomName });
  },
  setRoomId: roomId => {
    set({ roomId });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('PokerRoomStore', usePokerRoomStore);
}

export default usePokerRoomStore;
