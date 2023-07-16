import { useEffect, useState } from 'react';

import { PokerDetail } from '@/components/organisms/PokerDetail';
import { PokerBoard } from '@/components/organisms/PokerBoard';
import { PokerVoting } from '@/components/organisms/PokerVoting';

import { FIBONACCI_NUMBERS, MODIFIED_FIBONACCI_NUMBERS, OPTION_CARDS } from '@/constants/common';

type PlayRoomProps = {
  room: Room;
};

export const PlayRoom = ({ room }: PlayRoomProps) => {
  const [vote, setVote] = useState<Vote>(room.votes[room.votes.length - 1]);

  const pokerCards = room.deck === 'FIBONACCI_NUMBERS' ? FIBONACCI_NUMBERS : MODIFIED_FIBONACCI_NUMBERS;
  const optionCards = OPTION_CARDS.filter(optionCard => optionCard.name !== 'break');

  useEffect(() => {
    setVote(room.votes[room.votes.length - 1]);
  }, [room.votes]);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      <PokerDetail room={room} vote={vote} />
      <PokerVoting room={room} vote={vote} />
      <PokerBoard pokerCards={pokerCards} optionCards={optionCards} />
    </div>
  );
};
