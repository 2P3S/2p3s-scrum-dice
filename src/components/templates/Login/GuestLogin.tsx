import { useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Input } from '@/components/atoms/Input';

import { fetchEnterRoom } from '@/utils/http/room';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useTranslation } from 'next-i18next';

type GuestLoginProps = {
  roomId: string;
};

export const GuestLogin = ({ roomId }: GuestLoginProps) => {
  const [userName, setUserName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [member, setMember] = useLocalStorage('member', {});
  const router = useRouter();
  const translate = useTranslation(['login']).t;

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleGuestLogin = async () => {
    if (!isChecked) return alert(translate('login:이용약관_및_개인정보취급방침에_동의를_클릭해주세요'));
    try {
      const res = await fetchEnterRoom(roomId as string, userName);
      setMember(res);

      router.push(`/room/${roomId}`);
    } catch (e) {
      console.error('Error creating room:', e);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-5 space-y-10">
      <Title headingLevel="h3" emoji="👀" className="font-bold">
        {translate('login:게스트로_로그인하기')}
      </Title>
      <Input
        placeholder={translate('login:게스트_이름을_입력해주세요')}
        className="w-full"
        value={userName}
        onChange={handleUserNameChange}
      />
      <div className="flex">
        <label className="label cursor-pointer">
          <input type="checkbox" checked={isChecked} onChange={handleCheckChange} className="checkbox" />
          <span className="label-text ml-3">{translate('login:이용약관_및_개인정보취급방침에_동의')}</span>
        </label>
      </div>
      <Button className="rounded-3xl w-full" onClick={handleGuestLogin}>
        {translate('login:로그인')}
      </Button>
    </div>
  );
};
