import { useEffect, useState } from 'react';

import { Paragraph } from '@/components/atoms/Paragraph';
import { MockCard } from '@/components/atoms/Card';
import useMemberStore from '@/store/useMemberStore';
import useSocketStore from '@/store/useSocketStore';

type PokerBoardProps = {
  pokerCards: string[];
  optionCards: OptionCard[];
  vote: Vote;
};

export const PokerBoard = ({ pokerCards, optionCards, vote }: PokerBoardProps) => {
  const socket = useSocketStore(state => state.socket);
  const member = useMemberStore(state => state.member);

  const [selectedCard, setSelectedCard] = useState<{ type: CardType; content: CardContent } | null>(null);

  const isSelectedCard = (type: CardType, content: CardContent) => {
    return selectedCard?.type === type && selectedCard.content === content;
  };

  const handleCardClick = (type: CardType, content: CardContent) => {
    if (!socket || !member) return;

    socket.emit('submit-card', {
      roomId: vote.room,
      voteId: vote.id,
      memberId: member.id,
      card: {
        type,
        content,
      },
    });
  };

  useEffect(() => {
    if (!vote || !member) return;

    // 현재 vote에서 투표한 이력이 있으면 카드 상태 초기화하기.
    const submittedCard = vote.cards?.[member.id];

    if (submittedCard) {
      setSelectedCard({
        type: submittedCard.type,
        content: submittedCard.content,
      });
    }
  }, [member, vote]);

  return (
    <div>
      <Paragraph size="large" className="font-bold">
        카드를 선택해주세요
      </Paragraph>
      <div className="mt-5">
        {/* mock-cost-type cards */}
        <div className="flex space-x-4">
          {pokerCards.map(cardContent => (
            <MockCard
              cardType="cost-type"
              content={cardContent}
              key={cardContent}
              isPokerBoard={true}
              className={isSelectedCard('cost-type', cardContent) ? '!-translate-y-4' : ''}
              onClick={() => handleCardClick('cost-type', cardContent)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
