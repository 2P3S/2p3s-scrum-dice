import { useState } from 'react';

import { Paragraph } from '@/components/atoms/Paragraph';
import { MockCard } from '@/components/atoms/Card';

type PokerBoardProps = {
  pokerCards: number[];
  optionCards: OptionCard[];
};

export const PokerBoard = ({ pokerCards, optionCards }: PokerBoardProps) => {
  const initializedCard: SelectedCard = {
    type: 'cost-type',
    content: 1,
  };
  const [selectedCard, setSelectedCard] = useState<SelectedCard>(initializedCard);

  const isSelectedCard = (value: CardContent) => {
    return selectedCard.content === value;
  };

  const handleCardClick = (type: CardType, content: CardContent) => {
    setSelectedCard({ type, content });
  };

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
              className={isSelectedCard(cardContent) ? '-translate-y-4' : ''}
              onClick={() => handleCardClick('cost-type', cardContent)}
            />
          ))}
        </div>
        {/* mock-not-cost-type cards */}
        <div className="flex space-x-4 mt-6">
          {optionCards.map(option => (
            <MockCard
              cardType="not-cost-type"
              content={option.name}
              key={option.name}
              className={isSelectedCard(option.name) ? '-translate-y-4' : ''}
              onClick={() => handleCardClick('not-cost-type', option.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
