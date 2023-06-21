import { useEffect } from 'react';
import useSocket from '@/hooks/useSocket';

import { PlayRoom } from '@/components/templates/PlayRoom';

const PokerRoom = () => {
  const socket = useSocket();

  useEffect(() => {
    if (socket === null) return;

    socket.on('failure', (error: string) => {
      console.log('Failure:', error);
    });

    socket.on('join-room', (response: any) => {
      console.log('Join Room:', response);
    });

    socket.on('join-success', (response: any) => {
      console.log('Join Success:', response);
    });

    socket.emit('join-room', {});

    // unmount시 소켓을 끊는다
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return <PlayRoom />;
};

export default PokerRoom;
