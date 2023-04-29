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

export const CreateRoom = () => {
  const [roomName, setRoomName] = useState<string>('');
  const [optionCards, setOptionCards] = useState<OptionCard[]>([
    {
      name: 'Egg Timer',
      emoji: '🐣',
      class: 'w-20 h-24 bg-yellow-400 rounded-lg text-[64px] shadow-lg',
      selected: true,
    },
    {
      name: 'Coffee Time',
      emoji: '☕',
      class: 'w-20 h-24 bg-stone-800 rounded-lg text-[64px] shadow-lg',
      selected: true,
    },
    {
      name: 'King',
      emoji: '👑',
      class: 'w-20 h-24 bg-emerald-700 rounded-lg text-[64px] shadow-lg',
      selected: true,
    },
    {
      name: 'Pass',
      emoji: '？',
      class: 'w-20 h-24 bg-red-600 rounded-lg text-[64px] shadow-lg text-white font-extrabold',
      selected: true,
    },
  ]);

  const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  const modifiedFibonacciNumbers = [0, 0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
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
    console.log('option cards:', optionCards);
  };

  return (
    <div className="px-16 py-5 space-y-10 max-w-lg">
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
          <div className="flex-1">
            <div className="p-3 bg-blue-800 bg-opacity-20 rounded-md grid grid-cols-4 gap-2 place-items-center shadow-md">
              {fibonacciNumbers.map((item, i) => (
                <Card key={i} state="selectable" className="w-[40px] h-[35px] text-2xl">
                  {item}
                </Card>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className=" p-3 rounded-md grid grid-cols-4 gap-2 place-items-center">
              {modifiedFibonacciNumbers.map((item, i) => (
                <Card key={i} state="openedMe" className="w-[40px] h-[35px] text-2xl bg-slate-300 hover:bg-slate-300 ">
                  {item}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Paragraph className="pb-2">옵션 카드를 사용해봐요</Paragraph>
        <div className="flex justify-between items-center space-x-3">
          {optionCards.map((optionCard, i) => (
            <div key={i} className="flex flex-col justify-center items-center" onClick={() => handleOptionCardClick(i)}>
              <button className={classnames(optionCard.class, optionCard.selected === false && 'grayscale blur-sm')}>
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
