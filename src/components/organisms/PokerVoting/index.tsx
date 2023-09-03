import useMemberStore from '@/store/useMemberStore';

import { Card, TempCard } from '@/components/atoms/Card';
import { Paragraph } from '@/components/atoms/Paragraph';

type PokerVotingProps = {
  room: Room;
  vote: Vote;
};

export const PokerVoting = ({ room, vote }: PokerVotingProps) => {
  const member = useMemberStore(state => state.member);

  // 카드 값 배열 생성
  const cardValues = room.members
    .filter(memberData => memberData.status) // memberData.status로 접속중인 멤버들만 필터링
    .map(memberData => parseInt(vote.cards?.[memberData.id]?.content as string))
    .filter(cardValue => !isNaN(cardValue));

  const averageValue = cardValues.length > 0 ? cardValues.reduce((a, b) => a + b, 0) / cardValues.length : null;

  return (
    <section>
      <div className="mb-4">
        {averageValue !== null && <p hidden={!vote.status}>Average : {averageValue.toFixed(1)}</p>}
      </div>
      <div className="flex space-x-4">
        {room.members.map(memberData => {
          if (!memberData.status) return null;

          const cardData = vote.cards?.[memberData.id];

          return (
            <div className="flex flex-col w-20" key={memberData.id}>
              {cardData ? <Card card={cardData} vote={vote} isMe={memberData.id === member?.id} /> : <TempCard />}
              <Paragraph size="small" className="mt-2 truncate">
                {memberData.name}
              </Paragraph>
            </div>
          );
        })}
      </div>
    </section>
  );
};
