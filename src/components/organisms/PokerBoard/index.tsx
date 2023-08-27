import { useEffect, useState } from 'react';

import { Paragraph } from '@/components/atoms/Paragraph';
import { MockCard } from '@/components/atoms/Card';
import useMemberStore from '@/store/useMemberStore';
import useSocketStore from '@/store/useSocketStore';
import { CARD_TYPE_COST } from '@/constants/common';

type PokerBoardProps = {
  pokerCards: string[];
  optionCards: OptionCard[];
  vote: Vote;
};

export const PokerBoard = ({ pokerCards, optionCards, vote }: PokerBoardProps) => {
  const socket = useSocketStore(state => state.socket);
  const member = useMemberStore(state => state.member);

  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const isSelectedCard = ({ type, content }: Card): string | undefined => {
    return selectedCard?.type === type && selectedCard.content === content ? '-translate-y-4' : undefined;
  };

  const handleCardClick = ({ type, content }: Card) => {
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
        <div className="flex flex-wrap gap-x-3 gap-y-5">
          {pokerCards.map(cardContent => (
            <MockCard
              cardType={CARD_TYPE_COST}
              content={cardContent}
              key={cardContent}
              isPokerBoard={true}
              className={
                isSelectedCard({
                  type: CARD_TYPE_COST,
                  content: cardContent,
                }) ?? ''
              }
              onClick={() =>
                handleCardClick({
                  type: CARD_TYPE_COST,
                  content: cardContent,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
