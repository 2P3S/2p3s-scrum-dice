import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useSocket from '@/hooks/useSocket';
import useLocalStorage from '@/hooks/useLocalStorage';

import { PlayRoom } from '@/components/templates/PlayRoom';
import useMemberStore from '@/store/useMemberStore';
import useSocketStore from '@/store/useSocketStore';
import useToastStore from '@/store/useToastStore';

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
  const [room, setRoom] = useState<Room>();
  const [localStorageMember, setLocalStorageMember] = useLocalStorage<Member | null>('member', null);

  const setMember = useMemberStore(state => state.setMember);
  const setSocket = useSocketStore(state => state.setSocket);
  const setToastMsgs = useToastStore(state => state.setToastMsgs);

  const router = useRouter();
  const { id: roomId } = router.query;

  // 페이지 접속 후 room 접속 로직
  useEffect(() => {
    if (!socket || !roomId) return;
    if (!localStorageMember) router.push(`/login?id=${roomId}`);

    setSocket(socket);

    socket.emit('join-request', {
      roomId: roomId,
      memberId: localStorageMember?.id,
    });

    const handleFailure = (res: JoinFailureRes) => {
      setToastMsgs(res.message)
      router.push(`/login?id=${roomId}`);
    };

    const handleRoomStatus = (res: any) => {
      setMember(res.data.member);

      // room.votes 배열의 length 가 0 이면 create-vote 이벤트 전송.
      if (res.data.room.votes.length === 0) {
        return socket.emit('create-vote', {
          roomId: res.data.room.id,
          memberId: res.data.member.id,
          voteName: '1회차',
        });
      }

      setRoom(res.data.room);
    };

    socket.on('room-status', handleRoomStatus);
    socket.on('failure', handleFailure);

    return () => {
      socket.off('room-status', handleRoomStatus);
      socket.off('failure', handleFailure);
    };
  }, [localStorageMember, roomId, router, setMember, setSocket, socket, setToastMsgs]);

  // room 접속 후 투표 관련 로직
  useEffect(() => {
    if (!socket) return;

    const handleMemberConnected = (res: any) => {
      setToastMsgs(`${res.data.member.name} ${res.message}`)
      setRoom(res.data.room);
    };

    const handleMemberDisconnected = (res: any) => {
      if (!room) return;
      setToastMsgs(`${res.data.member.name} ${res.message}`);

      const copyRoom = room;
      const members = copyRoom.members.map(member => {
        if (member.id === res.data.member.id) {
          member.status = false;
        }

        return member;
      });

      setRoom(prevRoom => {
        return { ...(prevRoom as Room), members };
      });
    };

    const handleVoteCreated = (res: any) => {
      setToastMsgs(`${res.data.vote.name} ${res.message}`)
      setRoom(res.data.room);
    };

    socket.on('member-connected', handleMemberConnected);
    socket.on('member-disconnected', handleMemberDisconnected);
    socket.on('vote-created', handleVoteCreated);

    return () => {
      socket.off('member-connected', handleMemberConnected);
      socket.off('member-disconnected', handleMemberDisconnected);
      socket.off('vote-created', handleVoteCreated);
    };
  }, [room, socket, setToastMsgs]);

  if (!room) return <div className="text-center">loading...</div>;

  return (
    <>
      <Head>
        <title>【Scrum Dice】 Play Room</title>
      </Head>
      <PlayRoom room={room} />
    </>
  );
};

export default PokerRoom;
