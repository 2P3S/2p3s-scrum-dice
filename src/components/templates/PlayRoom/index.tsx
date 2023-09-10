import { useCallback, useEffect, useState } from 'react';
import useSocketStore from '@/store/useSocketStore';
import useToastStore from '@/store/useToastStore';

import { PokerDetail } from '@/components/organisms/PokerDetail';
import { PokerBoard } from '@/components/organisms/PokerBoard';
import { PokerVoting } from '@/components/organisms/PokerVoting';

import { FIBONACCI_NUMBERS, MODIFIED_FIBONACCI_NUMBERS, OPTION_CARDS } from '@/constants/common';
import { useTranslation } from 'next-i18next';

type PlayRoomProps = {
  room: Room;
};

export const PlayRoom = ({ room }: PlayRoomProps) => {
  const socket = useSocketStore(state => state.socket);
  const setToastMsgs = useToastStore(state => state.setToastMsgs);
  const [vote, setVote] = useState<Vote>(room.votes[room.votes.length - 1]);

  const translate = useTranslation(['roomid']).t;

  const pokerCards = room.deck === 'FIBONACCI_NUMBERS' ? FIBONACCI_NUMBERS : MODIFIED_FIBONACCI_NUMBERS;
  const optionCards = OPTION_CARDS.filter(optionCard => optionCard.name !== 'break');

  const handleCardSubmitted = useCallback(
    (res: any) => {
      setToastMsgs(`${res.data.member.name} ${translate('roomid:님의')} ${translate(res.message)}`);
      setVote(res.data.vote);
    },
    [setToastMsgs,translate],
  );

  const handleCardOpened = useCallback(
    (res: any) => {
      setToastMsgs(translate(res.message));
      setVote(res.data.vote);
    },
    [setToastMsgs, translate],
  );

  useEffect(() => {
    setVote(room.votes[room.votes.length - 1]);
  }, [room.votes]);

  useEffect(() => {
    if (!socket) return;

    socket.on('card-submitted', handleCardSubmitted);
    socket.on('card-opened', handleCardOpened);

    return () => {
      socket.off('card-submitted', handleCardSubmitted);
      socket.off('card-opened', handleCardOpened);
    };
  }, [socket, setToastMsgs, handleCardOpened, handleCardSubmitted]);

  return (
    <div className="space-y-4 max-w-6xl mx-auto px-5">
      <PokerDetail room={room} vote={vote} />
      <PokerVoting room={room} vote={vote} />
      {/* 매 회차 투표가 끝남과 동시에 PokerBoard 를 hidden 처리한다. */}
      {!vote.status && <PokerBoard pokerCards={pokerCards} optionCards={optionCards} vote={vote} />}
    </div>
  );
};
