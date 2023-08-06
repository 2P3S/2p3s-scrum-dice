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
  const { t } = useTranslation(['common', 'createroom']);

  const [roomName, setRoomName] = useState<string>('');
  const [deckType, setDeckType] = useState<DeckType>('FIBONACCI_NUMBERS');
  const [optionCards, setOptionCards] = useState<NotCostContent[]>([]);

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const validateFormData = (deckType: DeckType | undefined, roomName: string) => {
    if (!deckType) {
      return 'No deck card selected.';
    }

    if (roomName === '') {
      return 'Room name is required.';
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
      alert(`room 입장에 실패하였습니다. ${e}`);
    }
  };

  return (
    <div className="px-16 py-5 space-y-10">
      <Title headingLevel="h3" emoji="🎉" className="font-bold">
        { t('common:플래닝_포커_방_생성하기') }
        { t('createroom:test') }
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
      <section>
        <Paragraph className="pb-2">옵션 카드를 사용해봐요</Paragraph>
        <div className="flex justify-start items-center space-x-6">
          <OptionCardGroup contents={NOT_COST_CONTENTS} optionCards={optionCards} setOptionCards={setOptionCards} />
        </div>
      </section>
      <Button className="rounded-3xl w-full" onClick={handleCreateRoomClick}>
        생성하기
      </Button>
    </div>
  );
};

export default CreateRoom;
