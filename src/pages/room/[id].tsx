import { useRouter } from 'next/router';
import { Card } from '@/components/atoms/Card';
import { FIBONACCI_NUMBERS, OPTION_CARDS, CustomOptionCard } from '@/constants/common';
import { OptionCard } from '@/components/molecules/OptionCard';
import { Paragraph } from '@/components/atoms/paragraph';
import useMemberStore from '@/store/useMemberStore';
import { Title } from '@/components/atoms/Title';
import { useState } from 'react';

type Player = {
  name: string;
  id: string;
  card: {
    type: string;
    value: number | string;
  };
};

const players: Player[] = [
  {
    name: '승현',
    id: '8743b52063cd84097a65d1633f5c74f5',
    card: {
      type: 'poker',
      value: 1,
    },
  },
  {
    name: '재순',
    id: 'abc2',
    card: {
      type: 'poker',
      value: 3,
    },
  },
  {
    name: '승형',
    id: 'abc3',
    card: {
      type: 'poker',
      value: 3,
    },
  },
  {
    name: '주용',
    id: 'abc3',
    card: {
      type: 'option',
      value: 'Egg Timer',
    },
  },
];

const PokerRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  const member = useMemberStore(state => state.member);

  const pokerCards = FIBONACCI_NUMBERS;
  const optionCards = OPTION_CARDS;

  const [selectedCard, setSelectedCard] = useState({
    type: 'poker',
    value: 1,
  });

  const findOptionCard = (player: Player): CustomOptionCard => {
    const optionCard = optionCards.find(card => card.name === player.card.value);

    if (optionCard === undefined)
      return {
        name: 'Egg Timer',
        emoji: '🐣',
        class: 'bg-yellow-400',
        selected: true,
      };

    return optionCard;
  };

  if (member === undefined) return;

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      <div className="py-10 mb-10 border-b-2 border-slate-100">
        <div className="flex justify-between mb-3">
          <Title headingLevel="h3">2022/03/27 플래닝포커</Title>
          <button>URL COPY</button>
        </div>
        <Paragraph size="large" className="font-bold">
          🎲 스크럼 2회차 🎲
        </Paragraph>
      </div>
      <div className="flex space-x-4">
        {players.map(player => (
          <div key={player.id}>
            {player.card.type === 'poker' ? (
              <Card state={player.id === member.id ? 'openedMe' : 'openedOther'} className="">
                {player.card.value}
              </Card>
            ) : (
              <OptionCard labelVisibility={false} option={findOptionCard(player)} />
            )}

            <Paragraph size="small" className="mt-2 ml-1">
              {player.name}
            </Paragraph>
          </div>
        ))}
      </div>
      <Paragraph size="large" className="font-bold">
        카드를 선택해주세요
      </Paragraph>
      <div className="flex space-x-4">
        {pokerCards.map((cardValue, i) => (
          <Card
            key={i}
            state={selectedCard.value === cardValue ? 'selected' : 'selectable'}
            className=""
            onClick={() => {
              setSelectedCard({ ...selectedCard, value: cardValue });
            }}
          >
            {cardValue}
          </Card>
        ))}
      </div>
      <div className="flex space-x-4">
        {optionCards.map((option, i) => (
          <div key={option.name} className="flex flex-col justify-center items-center">
            <OptionCard key={option.name} option={option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokerRoom;
