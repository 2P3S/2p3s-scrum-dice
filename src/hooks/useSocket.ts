import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export default function useSocket(): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL!);

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
