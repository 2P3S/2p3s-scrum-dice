import { useRouter } from 'next/router';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Input } from '@/components/atoms/input';
import { Paragraph } from '@/components/atoms/paragraph';

import { Option, OptionCard } from '@/components/molecules/OptionCard';

import { Card, CardGroup } from '@/components/organisms/CardGroup';

import { FIBONACCI_NUMBERS, MODIFIED_FIBONACCI_NUMBERS, OPTION_CARDS } from '@/constants/common';

export const CreateRoom = () => {
  const router = useRouter();

  const [roomName, setRoomName] = useState<string>('');
  const [cards, setCards] = useState<Card[]>([
    {
      title: 'fibonacci',
      cards: FIBONACCI_NUMBERS,
      selected: true,
    },
    {
      title: 'modifiedFibonacci',
      cards: MODIFIED_FIBONACCI_NUMBERS,
      selected: false,
    },
  ]);
  const [options, setOptions] = useState<Option[]>(OPTION_CARDS);

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleCardClick = (cardTitle: string) => {
    setCards(
      cards.map(card => ({
        ...card,
        selected: card.title === cardTitle,
      })),
    );
  };

  const handleOptionCardClick = (index: number) => {
    setOptions(options.map((option, i) => (i === index ? { ...option, selected: !option.selected } : option)));
  };

  const handleCreateRoomClick = () => {
    console.log('room name:', roomName);
    console.log(
      'selected cards:',
      cards.find(card => card.selected),
    );
    console.log('option cards:', options);
    router.push('room/8743b52063cd84097a65d1633f5c74f5');
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
          {cards.map(card => (
            <div className="flex-1" key={card.title}>
              <CardGroup cards={card.cards} title={card.title} selected={card.selected} onCardClick={handleCardClick} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <Paragraph className="pb-2">옵션 카드를 사용해봐요</Paragraph>
        <div className="flex justify-start items-center space-x-6">
          {options.map((option, i) => (
            <div
              key={option.name}
              className="flex flex-col justify-center items-center"
              onClick={() => handleOptionCardClick(i)}
            >
              <OptionCard option={option} />
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
