import { mountStoreDevtool } from 'simple-zustand-devtools';
import { Socket } from 'socket.io-client';
import { create } from 'zustand';

type SocketState = {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
};

const useSocketStore = create<SocketState>(set => ({
  socket: null,
  setSocket: socket => {
    set({ socket });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SocketStore', useSocketStore);
}

export default useSocketStore;
