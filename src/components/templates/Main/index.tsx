import { LinkButton } from '@/components/atoms/Button';
import { Paragraph } from '@/components/atoms/Paragraph';

export const Main = () => {
  return (
    <main className="m-auto max-w-2xl pt-32 text-center">
      <div>
        <div className="text-2xl text-blue-600">효율적인 플래닝 포커를 위한</div>
        <div className="relative text-5xl font-bold text-blue-600 sm:text-5xl my-3 animate-fade animate-duration-[3000ms] animate-ease-linear">
          Scrum Dice<span className="text-2xl ml-2">로</span>
          <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-blue-400 opacity-75"></span>
        </div>
        <div className="text-2xl text-blue-600 mb-10">실시간 투표를 진행해보세요</div>
      </div>
      {/* <Paragraph size="small" className="">
        팀의 플래닝 포커를 편리하고 친밀하게 만들어줄게요
      </Paragraph> */}
      <LinkButton href="/room" className="rounded-full w-2/4">
        지금 바로 시작하기
      </LinkButton>
    </main>
  );
};
