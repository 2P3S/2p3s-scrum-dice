import { useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Input } from '@/components/atoms/input';

import { fetchEnterRoom } from '@/utils/api/room';
import useLocalStorage from '@/hooks/useLocalStorage';

type GuestLoginProps = {
  roomId: string;
};

export const GuestLogin = ({ roomId }: GuestLoginProps) => {
  const [userName, setUserName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [member, setMember] = useLocalStorage('member', {});
  const router = useRouter();

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleGuestLogin = async () => {
    if (!isChecked) return alert('이용약관 및 개인정보취급방침에 동의를 클릭해주세요.');
    try {
      const res = await fetchEnterRoom(roomId as string, userName);
      setMember(res);

      router.push(`/room/${roomId}`);
    } catch (e) {
      console.error('Error creating room:', e);
    }
  };

  return (
    <div className="px-16 py-5 space-y-10">
      <Title headingLevel="h3" emoji="👀" className="font-bold">
        게스트로 로그인하기
      </Title>
      <Input
        placeholder="😁 게스트 이름을 입력해주세요"
        className="w-full"
        value={userName}
        onChange={handleUserNameChange}
      />
      <div className="flex">
        <label className="label cursor-pointer">
          <input type="checkbox" checked={isChecked} onChange={handleCheckChange} className="checkbox" />
          <span className="label-text ml-3">이용약관 및 개인정보취급방침에 동의</span>
        </label>
      </div>
      <Button className="rounded-3xl w-full" onClick={handleGuestLogin}>
        로그인
      </Button>
    </div>
  );
};
