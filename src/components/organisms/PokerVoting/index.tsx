import useMemberStore from '@/store/useMemberStore';

import { Card, TempCard } from '@/components/atoms/Card';
import { Paragraph } from '@/components/atoms/Paragraph';

type PokerVotingProps = {
  room: Room;
  vote: Vote;
};

export const PokerVoting = ({ room, vote }: PokerVotingProps) => {
  // TODO: 자신의 카드는 다른 스타일로 보여주는게 맞지 않을까?
  const member = useMemberStore(state => state.member);

  // key 는 members 의 id
  type MemberId = (typeof room.members)[number]['id'];

  // after
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
      {room.members.map(member => {
        if (!member.status) return;
        if (!cards[member.id]) {
          return (
            <div key={member.id}>
              <TempCard />
              <Paragraph>{member.name}</Paragraph>
            </div>
          );
        }

        return (
          <div key={member.id}>
            <Card card={cards[member.id]} vote={vote} />
            <Paragraph size="small" className="mt-2 ml-1">
              {member.name}
            </Paragraph>
          </div>
        );
      })}
    </div>
  );
};
