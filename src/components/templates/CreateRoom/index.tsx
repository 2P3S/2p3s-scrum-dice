import { useRouter } from 'next/router';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';

import { DeckCardGroup, OptionCardGroup } from '@/components/organisms/CardGroup';
import { FIBONACCI_NUMBERS, MODIFIED_FIBONACCI_NUMBERS, NOT_COST_CONTENTS } from '@/constants/common';

import { fetchCreateRoom } from '@/utils/http/room';

import { useTranslation } from 'next-i18next';

export const CreateRoom = () => {
  const translate = useTranslation(['createroom']).t;
  const router = useRouter();

  const [roomName, setRoomName] = useState<string>('');
  const [deckType, setDeckType] = useState<DeckType>('FIBONACCI_NUMBERS');
  const [optionCards, setOptionCards] = useState<NotCostContent[]>([]);

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const validateFormData = (deckType: DeckType | undefined, roomName: string) => {
    if (!deckType) {
      return translate('createroom:덱_카드를_선택해주세요');
    }

    if (roomName === '') {
      return translate('createroom:방_이름을_입력해주세요');
    }

    return null;
  };

  const handleCreateRoomClick = async () => {
    const validationError = validateFormData(deckType, roomName);

    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const { id } = await fetchCreateRoom(roomName, deckType);
      router.push(`/login?id=${id}`);
    } catch (e) {
      alert(translate('createroom:방_입장에_실패하였습니다', {e}));
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-5 space-y-10">
      <Title headingLevel="h3" emoji="🎉" className="font-bold">
        {translate('createroom:플래닝_포커_방_생성하기')}
      </Title>
      <Input
        label={translate('createroom:방_이름을_입력해주세요')}
        placeholder="2023-04-25"
        className="w-full"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <section>
        <Paragraph className="pb-2">{translate('createroom:기본_카드_묶음을_선택해주세요')}</Paragraph>
        <div className="flex flex-wrap gap-y-2">
          <DeckCardGroup
            deckType="FIBONACCI_NUMBERS"
            contents={FIBONACCI_NUMBERS}
            isSelected={deckType === 'FIBONACCI_NUMBERS'}
            setDeckType={setDeckType}
          />
          <DeckCardGroup
            deckType="MODIFIED_FIBONACCI_NUMBERS"
            contents={MODIFIED_FIBONACCI_NUMBERS}
            isSelected={deckType === 'MODIFIED_FIBONACCI_NUMBERS'}
            setDeckType={setDeckType}
          />
        </div>
      </section>
      {/* Todo: ver.2에서 옵션카드 기능이 추가될 경우 아래 기능을 사용한다. */}
      {/* <section>
        <Paragraph className="pb-2">{translate('createroom:옵션_카드를_사용해봐요')}</Paragraph>
        <div className="flex justify-start items-center space-x-6">
          <OptionCardGroup contents={NOT_COST_CONTENTS} optionCards={optionCards} setOptionCards={setOptionCards} />
        </div>
      </section> */}
      <Button className="rounded-3xl w-full" onClick={handleCreateRoomClick}>
        {translate('createroom:생성하기')}
      </Button>
    </div>
  );
};

export default CreateRoom;
