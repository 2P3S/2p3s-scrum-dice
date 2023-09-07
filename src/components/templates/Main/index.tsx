import { LinkButton } from '@/components/atoms/Button';
import { useTranslation } from 'next-i18next';

export const Main = () => {
  const translate = useTranslation(['common']).t;

  return (
    <main className="m-auto max-w-2xl pt-32 text-center">
      <div>
        <div className="text-2xl text-gray-800">{translate('common:효율적인_플래닝_포커를_위한')}</div>
        <div className="relative text-5xl font-bold text-blue-600 sm:text-5xl my-3 animate-fade animate-duration-[3000ms] animate-ease-linear">
          Scrum Dice<span className="text-2xl font-normal text-gray-800 ml-2">{translate('common:에서')}</span>
          <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-blue-400 opacity-75"></span>
        </div>
        <div className="text-2xl text-gray-800 mb-10">{translate('common:실시간_투표를_진행해보세요')}</div>
      </div>
      <LinkButton href="/room" className="rounded-full w-2/5">
      {translate('common:지금_바로_시작하기')}
      </LinkButton>
    </main>
  );
};
