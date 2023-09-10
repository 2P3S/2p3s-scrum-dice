import { useRouter } from 'next/router';
import { GuestLogin } from '@/components/templates/Login';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Login() {
  const router = useRouter();
  const { id: roomId } = router.query;

  useEffect(() => {
    // Todo: roomId를 검사하는 로직이 필요함.
  }, [roomId]);

  if (!roomId) return <div className="text-center">잘못된 접근입니다. roomId를 확인해주세요.</div>;

  return (
    <>
      <Head>
        <title>【Scrum Dice】 Login</title>
      </Head>
      <GuestLogin roomId={roomId as string} />
    </>
  );
}
