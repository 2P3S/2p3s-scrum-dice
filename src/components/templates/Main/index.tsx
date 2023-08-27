import { LinkButton } from '@/components/atoms/Button';

export const Main = () => {
  return (
    <main className="m-auto max-w-2xl pt-32 text-center">
      <div>
        <div className="text-2xl text-gray-800">효율적인 플래닝 포커를 위한</div>
        <div className="relative text-5xl font-bold text-blue-600 sm:text-5xl my-3 animate-fade animate-duration-[3000ms] animate-ease-linear">
          Scrum Dice<span className="text-2xl font-normal text-gray-800 ml-2">에서</span>
          <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-blue-400 opacity-75"></span>
        </div>
        <div className="text-2xl text-gray-800 mb-10">실시간 투표를 진행해보세요</div>
      </div>
      <LinkButton href="/room" className="rounded-full w-2/5">
        지금 바로 시작하기
      </LinkButton>
    </main>
  );
};
