import useMemberStore from '@/store/useMemberStore';

import { Card, TempCard } from '@/components/atoms/Card';
import { Paragraph } from '@/components/atoms/Paragraph';

type PokerVotingProps = {
  room: Room;
  vote: Vote;
};

export const PokerVoting = ({ room, vote }: PokerVotingProps) => {
  const member = useMemberStore(state => state.member);

  return (
    <div className="flex space-x-4">
      {room.members.map(memberData => {
        if (!memberData.status) return null;

        const cardData = vote.cards?.[memberData.id];

        return (
          <div className="flex flex-col" key={memberData.id}>
            {cardData ? <Card card={cardData} vote={vote} isMe={memberData.id === member?.id} /> : <TempCard />}
            <Paragraph size="small" className="mt-2">{memberData.name}</Paragraph>
          </div>
        );
      })}
    </div>
  );
};
