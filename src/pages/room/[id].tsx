import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSocket from '@/hooks/useSocket';
import useLocalStorage from '@/hooks/useLocalStorage';

import { PlayRoom } from '@/components/templates/PlayRoom';
import useMemberStore from '@/store/useMemberStore';

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
  const [room, setRoom] = useState<Room>();
  // FIXME: localStorage를 사용하는 로직 삭제하기.
  const [member, setLocalMember] = useLocalStorage<Member | null>('member', null);
  const setMember = useMemberStore(state => state.setMember);

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

    const handleMemberConnected = (res: any) => {
      console.log('✅ handleMemberConnected', res);
      setRoom(res.data.room);
    };

    const handleRoomStatus = (res: any) => {
      console.log('✅ handleRoomStatus', res.data);
      setRoom(res.data.room);
      setMember(res.data.member);

      // room.votes 배열의 length 가 0 이면 create-vote 이벤트 전송.
      if (res.data.room.votes.length === 0) {
        console.log('회차 정보가 없기에 1회차를 생성합니다.');
        return socket.emit('create-vote', {
          roomId: res.data.room.id,
          memberId: res.data.member.id,
          voteName: '1회차',
        });
      }

      setEnterSuccess(true);
    };

    const handleVoteCreated = (res: any) => {
      console.log('✅ handleVoteCreated', res);

      setRoom(res.data.room);
      setEnterSuccess(true);
    };

    socket.emit('join-request', {
      roomId: member?.room,
      memberId: member?.id,
    });

    socket.on('failure', handleFailure);
    socket.on('member-connected', handleMemberConnected);
    socket.on('room-status', handleRoomStatus);
    socket.on('vote-created', handleVoteCreated);

    return () => {
      socket.off('failure', handleFailure);
      socket.off('member-connected', handleMemberConnected);
      socket.off('room-status', handleRoomStatus);
      socket.off('vote-created', handleVoteCreated);
    };
  }, [socket, roomId, member, setMember, router]);

  if (!isEnterSuccess || !room) return <div className="text-center">loading...</div>;

  return <PlayRoom room={room} />;
};

export default PokerRoom;
