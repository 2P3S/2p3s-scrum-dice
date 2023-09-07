import { useRouter } from 'next/router';
import { GuestLogin } from '@/components/templates/Login';
import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Login() {
  const router = useRouter();
  const { id: roomId } = router.query;
  const translate = useTranslation(['login']).t;

  useEffect(() => {
    // Todo: roomId를 검사하는 로직이 필요함.
  }, [roomId]);

  if (!roomId) return <div className="text-center">{translate('login:잘못된_접근입니다_roomId를_확인해주세요')}</div>;

  return <GuestLogin roomId={roomId as string} />;
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});
