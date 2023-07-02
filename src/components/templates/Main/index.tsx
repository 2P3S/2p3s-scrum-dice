import { LinkButton } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/paragraph';

export const Main = () => {
  return (
    <main className="m-auto max-w-md py-32 text-center">
      <Paragraph size="large" className="mb-4">
        지금까지 없던 혁신적인 플래닝 포커
      </Paragraph>
      <Title headingLevel="h1" className="font-notoSansKr !text-4xl font-bold text-blue-600 mb-10">
        “Scrum Dice”로 팀워크를 한 단계 업그레이드 하세요!
      </Title>
      <Paragraph size="small" className="px-5 mb-10 text-slate-500">
        &apos;플래닝 포커&apos;로 팀원들과 함께 더욱 효율적인 스크럼을 진행해보세요. 자동으로 평균을 계산해 시간을
        아껴드릴 뿐만 아니라, 애그 타이머와 쉬어가기 기능을 제공해 스트레스를 줄이고 집중력을 높일 수 있습니다. 또한, 매
        회차마다 기록이 저장되어 나중에도 쉽게 참고할 수 있고, 매회차 이름을 커스텀할 수 있어 더 나은 팀워크를 위한
        환경을 제공합니다.
      </Paragraph>
      <LinkButton href="/room" className="rounded-full px-12">
        지금 바로 시작해보세요
      </LinkButton>
    </main>
  );
};
