import { useEffect, useState } from 'react';
import useSocketStore from '@/store/useSocketStore';

import { PokerDetail } from '@/components/organisms/PokerDetail';
import { PokerBoard } from '@/components/organisms/PokerBoard';
import { PokerVoting } from '@/components/organisms/PokerVoting';

import { FIBONACCI_NUMBERS, MODIFIED_FIBONACCI_NUMBERS, OPTION_CARDS } from '@/constants/common';

type PlayRoomProps = {
  room: Room;
};

export const PlayRoom = ({ room }: PlayRoomProps) => {
  const socket = useSocketStore(state => state.socket);
  const [vote, setVote] = useState<Vote>(room.votes[room.votes.length - 1]);

  const pokerCards = room.deck === 'FIBONACCI_NUMBERS' ? FIBONACCI_NUMBERS : MODIFIED_FIBONACCI_NUMBERS;
  const optionCards = OPTION_CARDS.filter(optionCard => optionCard.name !== 'break');

  useEffect(() => {
    if (!socket) return;
    setVote(room.votes[room.votes.length - 1]);

    const handleCardSubmitted = (res: any) => {
      console.log('handleCardSubmitted', res);
      setVote(res.data.vote);
    };

    socket.on('card-submitted', handleCardSubmitted);

    return () => {
      socket.off('card-submitted', handleCardSubmitted);
    };
  }, [room.votes, socket]);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      <PokerDetail room={room} vote={vote} />
      <PokerVoting room={room} vote={vote} />
      <PokerBoard pokerCards={pokerCards} optionCards={optionCards} vote={vote} />
    </div>
  );
};
