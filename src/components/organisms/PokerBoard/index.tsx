import { Paragraph } from '@/components/atoms/paragraph';
import { Card } from '@/components/atoms/Card';
import { OptionCard } from '@/components/molecules/OptionCard';

type PokerBoardProps = {
  pokerCards: number[];
  optionCards: OptionCard[];
  selectedCard: SelectedCard;
  setSelectedCard: (selectedCard: SelectedCard) => void;
};

export const PokerBoard = ({ pokerCards, optionCards, selectedCard, setSelectedCard }: PokerBoardProps) => {
  // 카드는 포커와 옵션 상관없이 1개만 선택할 수 있다.
  return (
    <div>
      <Paragraph size="large" className="font-bold">
        카드를 선택해주세요
      </Paragraph>
      <div className="mt-5">
        {/* 포커카드 */}
        <div className="flex space-x-4">
          {pokerCards.map(cardValue => (
            <Card
              key={cardValue}
              state={selectedCard.value === cardValue ? 'selected' : 'selectable'}
              onClick={() => {
                setSelectedCard({ type: 'poker', value: cardValue });
              }}
            >
              {cardValue}
            </Card>
          ))}
        </div>
        {/* 옵션카드 */}
        <div className="flex space-x-4 mt-6">
          {optionCards.map(option => (
            <div key={option.name} className="flex flex-col justify-center items-center">
              <OptionCard
                key={option.name}
                state={selectedCard.value === option.name ? 'selected' : 'selectable'}
                option={option}
                labelVisibility={true}
                handleClick={() => setSelectedCard({ type: 'option', value: option.name })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
