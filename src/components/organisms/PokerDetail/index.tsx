import { Button, CountDownButton } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';

import clipboardCopy from 'clipboard-copy';
import useSocketStore from '@/store/useSocketStore';
import useMemberStore from '@/store/useMemberStore';

import { useTranslation } from 'next-i18next';

type PokerDetailProps = {
  room: Room;
  vote: Vote;
};

export const PokerDetail = ({ room, vote }: PokerDetailProps) => {
  const socket = useSocketStore(state => state.socket);
  const member = useMemberStore(state => state.member);

  const translate = useTranslation(['roomid']).t;

  const handleResetCard = () => {
    const currentVoteNumber = room.votes.length;
    const numberForTranslate = currentVoteNumber + 1;

    socket?.emit('create-vote', {
      roomId: room.id,
      memberId: member?.id,
      voteName: translate('roomid:n회차', {numberForTranslate}),
    });
  };
  const handleOpenCard = () => {
    socket?.emit('open-card', {
      roomId: room.id,
      memberId: member?.id,
      voteId: vote.id,
    });
  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    clipboardCopy(currentUrl)
      .then(() => {
        console.log(`URL copied to clipboard: ${currentUrl}`);
      })
      .catch(e => {
        console.log(`Failed to copy URL to clipboard: ${e}`);
      });
  };

  return (
    <div className="py-10 mb-10 border-b-2 border-slate-100">
      <div className="flex justify-between">
        <Title headingLevel="h3">{room.name}</Title>
        <Button onClick={handleCopyUrl}>URL COPY</Button>
      </div>
      <Paragraph size="large" className="mb-4">
        🎲 {vote.name} 🎲
      </Paragraph>
      <div className="flex space-x-2">
        {/* <CountDownButton isOpen={vote.status} counter={180} className="bg-yellow-400 border-0">
          🐣
        </CountDownButton> */}
        {vote.status ? (
          <Button className="bg-black text-white" onClick={handleResetCard}>
            {translate('roomid:다음회차로_넘어가기')}
          </Button>
        ) : (
          <Button onClick={handleOpenCard}>{translate('roomid:결과보기')}</Button>
        )}
      </div>
    </div>
  );
};
