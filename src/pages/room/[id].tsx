import { useEffect, useState } from 'react';
import useSocket from '@/hooks/useSocket';
import useLocalStorage from '@/hooks/useLocalStorage';

import { PlayRoom } from '@/components/templates/PlayRoom';

type JoinSuccessRes = {
  data: {
    member: Member;
    room: Room;
  };
  success: boolean;
  message: string;
};

type JoinFailureRes = {
  success: boolean;
  message: string;
};

const PokerRoom = () => {
  const socket = useSocket();
  const [isEnterSuccess, setEnterSuccess] = useState<boolean>(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [member, setMember] = useLocalStorage<Member | null>('member', null);

  useEffect(() => {
    if (!socket) return;

    const handleFailure = (res: JoinFailureRes) => {
      setEnterSuccess(res.success);
    };

    const handleJoinSuccess = (res: JoinSuccessRes) => {
      setEnterSuccess(res.success);
      setMember(res.data.member);
      setRoom(res.data.room);
    };

    socket.on('failure', handleFailure);
    socket.on('join-success', handleJoinSuccess);

    socket.emit('join-room', {
      memberId: member?.id,
      roomId: member?.room,
    });

    return () => {
      socket.off('failure', handleFailure);
      socket.off('join-success', handleJoinSuccess);
    };
  }, [socket, member, setMember]);

  if (!isEnterSuccess || !room) return <div className="text-center">loading...</div>;

  return <PlayRoom room={room} />;
};

export default PokerRoom;
