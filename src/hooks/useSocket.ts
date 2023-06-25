import { useEffect, useState } from 'react';
import useSocketStore from '@/store/useSocketStore';
import { Socket, io } from 'socket.io-client';

export default function useSocket(): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);
  const setGlobalSocket = useSocketStore(state => state.setSocket);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL!);
    setGlobalSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('socket connected!');
    });
    newSocket.on('disconnect', () => {
      console.log('socket disconnected!');
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return socket;
}
