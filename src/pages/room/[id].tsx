import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const { id: roomId } = router.query;

  // TODO: handler type 정의하기.
  useEffect(() => {
    if (!socket || !roomId) return;

    const handleFailure = (res: JoinFailureRes) => {
      console.log('✅ handleFailure', res);
      setEnterSuccess(res.success);

      // member 정보가 없을 경우 비회원 로그인 페이지로 이동하기
      if (roomId && !member) router.push(`/login?id=${roomId}`);
    };

    const handleJoinSuccess = (res: JoinSuccessRes) => {
      console.log('✅ handleJoinSuccess', res);

      // setEnterSuccess(res.success);
      // setMember(res.data.member);
      // setRoom(res.data.room);

      socket?.emit('join-request', {
        memberId: member?.id,
        roomId: member?.room,
      });
    };

    const handleMemberConnected = (res: any) => {
      console.log('✅ handleMemberConnected', res);
      // TODO: 새로운 맴버가 들어왔기에 setRoom 객체를 업데이트 해야한다.
    };

    const handleHelloWorld = (res: any) => {
      console.log('✅ handleHelloWorld', res);
    };

    const handleRoomStatus = (res: any) => {
      console.log('✅ handleRoomStatus', res);

      // room.votes 배열의 length 가 0 이면 create-vote 이벤트 전송.
      if (res.data.room.votes.length === 0) {
        return socket.emit('create-vote', {
          roomId: res.data.room.id,
          memberId: res.data.member.id,
          voteName: '1회차',
        });
      }

      console.log('이미 1회차가 등록되어 있음.');
      setRoom(res.data.room);
      // setEnterSuccess(true);
    };

    const handleVoteCreated = (res: any) => {
      console.log('✅ handleVoteCreated', res);

      // setRoom(res.data.room);
      // setEnterSuccess(true);
    };

    console.log(member?.id, member?.room);

    socket.emit('join-request', {
      roomId: member?.room,
      memberId: member?.id,
    });

    socket.on('failure', handleFailure);
    socket.on('join-success', handleJoinSuccess);
    socket.on('member-connected', handleMemberConnected);
    socket.on('hello-world', handleHelloWorld);
    socket.on('room-status', handleRoomStatus);
    socket.on('vote-created', handleVoteCreated);

    return () => {
      socket.off('failure', handleFailure);
      socket.off('join-success', handleJoinSuccess);
    };
  }, [socket, roomId, member, router]);

  if (!isEnterSuccess || !room) return <div className="text-center">loading...</div>;

  return <PlayRoom room={room} />;
};

export default PokerRoom;
