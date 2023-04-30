import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Title } from '@/components/atoms/Title';
import { Input } from '@/components/atoms/input';
import { Paragraph } from '@/components/atoms/paragraph';

import { useState } from 'react';

import classnames from 'classnames';

type OptionCard = {
  name: string;
  emoji: string;
  class: string;
  selected: boolean;
};

type SelectableCardGroupProps = {
  title: string;
  cards: number[];
  selected: boolean;
  onCardClick: (title: string) => void;
};

// TODO: components/organism 으로 이동.
const SelectableCardGroup = (props: SelectableCardGroupProps) => {
  const selectedWrapperStyle = 'bg-blue-800 bg-opacity-20 shadow-md';

  return (
    <div
      className={classnames(
        'p-3 rounded-md grid grid-cols-4 gap-2 place-items-center hover:border hover:border-blue-700',
        props.selected && selectedWrapperStyle,
      )}
      onClick={() => props.onCardClick(props.title)}
    >
      {props.cards.map((item, i) => (
        <Card key={i} state={props.selected ? 'selectable' : 'openedMe'} className="!text-4xl">
          {item}
        </Card>
      ))}
    </div>
  );
};

const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const modifiedFibonacciNumbers = [0, 0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

export const CreateRoom = () => {
  // TODO: global store 에서 관리.
  const [roomName, setRoomName] = useState<string>('');
  const [cardsState, setCardsState] = useState([
    {
      title: 'fibonacciNumbers',
      cards: fibonacciNumbers,
      selected: true,
    },
    {
      title: 'modifiedFibonacciNumbers',
      cards: modifiedFibonacciNumbers,
      selected: false,
    },
  ]);
  const [optionCards, setOptionCards] = useState<OptionCard[]>([
    {
      name: 'Egg Timer',
      emoji: '🐣',
      class: 'bg-yellow-400',
      selected: true,
    },
    {
      name: 'Coffee Time',
      emoji: '☕',
      class: 'bg-stone-800',
      selected: true,
    },
    {
      name: 'King',
      emoji: '👑',
      class: 'bg-emerald-700',
      selected: true,
    },
    {
      name: 'Pass',
      emoji: '？',
      class: 'bg-red-600 text-white font-extrabold',
      selected: true,
    },
  ]);

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleCardClick = (cardTitle: string) => {
    setCardsState(
      cardsState.map(card => ({
        ...card,
        selected: card.title === cardTitle,
      })),
    );
  };

  const handleOptionCardClick = (index: number) => {
    setOptionCards(
      optionCards.map((optionCard, i) =>
        i === index ? { ...optionCard, selected: !optionCard.selected } : optionCard,
      ),
    );
  };

  const handleCreateRoomClick = () => {
    console.log('room name:', roomName);
    console.log(
      'selected cards:',
      cardsState.find(card => card.selected),
    );
    console.log('option cards:', optionCards);
  };

  return (
    <div className="px-16 py-5 space-y-10">
      <Title headingLevel="h3" emoji="🎉" className="font-bold">
        플래닝 포커 방 생성하기
      </Title>
      <Input
        label="방 이름을 입력해주세요"
        placeholder="2023-04-25"
        className="w-full"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <section>
        <Paragraph className="pb-2">기본 카드 묶음을 선택해주세요</Paragraph>
        <div className="flex justify-around space-x-2">
          {cardsState.map(card => (
            <div className="flex-1" key={card.title}>
              <SelectableCardGroup
                cards={card.cards}
                title={card.title}
                selected={card.selected}
                onCardClick={handleCardClick}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <Paragraph className="pb-2">옵션 카드를 사용해봐요</Paragraph>
        <div className="flex justify-between items-center space-x-3">
          {optionCards.map((optionCard, i) => (
            <div key={i} className="flex flex-col justify-center items-center" onClick={() => handleOptionCardClick(i)}>
              <button
                className={classnames(
                  'w-20 h-24 rounded-lg text-[64px] shadow-lg',
                  optionCard.class,
                  optionCard.selected === false && 'grayscale blur-sm',
                )}
              >
                {optionCard.emoji}
              </button>
              <Paragraph size="small" className="mt-2">
                {optionCard.name}
              </Paragraph>
            </div>
          ))}
        </div>
      </section>
      <Button className="rounded-3xl w-full" onClick={handleCreateRoomClick}>
        생성하기
      </Button>
    </div>
  );
};
