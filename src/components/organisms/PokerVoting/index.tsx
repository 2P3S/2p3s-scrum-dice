import useMemberStore from '@/store/useMemberStore';

import { Card, TempCard } from '@/components/atoms/Card';
import { Paragraph } from '@/components/atoms/Paragraph';

type PokerVotingProps = {
  room: Room;
  vote: Vote;
};

export const PokerVoting = ({ room, vote }: PokerVotingProps) => {
  const member = useMemberStore(state => state.member);

  type MemberId = (typeof room.members)[number]['id'];

  const cards: {
    [key: MemberId]: {
      content: CardContent;
      type: CardType;
    };
  } = {};
  vote.cards.forEach(({ member, content, type }) => {
    cards[member as string] = { content, type };
  });

  return (
    <div className="flex space-x-4">
      {room.members.map(memberData => {
        if (!memberData.status) return;
        if (!cards[memberData.id]) {
          return (
            <div key={memberData.id}>
              <TempCard />
              <Paragraph>{memberData.name}</Paragraph>
            </div>
          );
        }

        return (
          <div key={memberData.id}>
            <Card card={cards[memberData.id]} vote={vote} isMe={memberData.id === member?.id} />
            <Paragraph size="small" className="mt-2 ml-1">
              {memberData.name}
            </Paragraph>
          </div>
        );
      })}
    </div>
  );
};
