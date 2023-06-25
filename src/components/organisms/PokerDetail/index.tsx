import { Button, CountDownButton } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/paragraph';
import clipboardCopy from 'clipboard-copy';

type PokerDetailProps = {
  room: Room;
  isOpen: boolean;
  handleOpen: () => void;
  handleReset: () => void;
};

export const PokerDetail = ({ room, isOpen, handleOpen, handleReset }: PokerDetailProps) => {
  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    clipboardCopy(currentUrl)
      .then(() => {
        console.log('URL copied to clipboard:', currentUrl);
        // 복사가 성공적으로 완료되었을 때 원하는 동작을 수행하기.
      })
      .catch(error => {
        console.error('Failed to copy URL to clipboard:', error);
        // 복사가 실패했을 때 원하는 동작을 수행하기.
      });
  };

  return (
    <div className="py-10 mb-10 border-b-2 border-slate-100">
      <div className="flex justify-between">
        <Title headingLevel="h3">{room.name}</Title>
        <Button onClick={handleCopyUrl}>URL COPY</Button>
      </div>
      <Paragraph size="large" className="mb-4">
        🎲 스크럼 1회차 🎲
      </Paragraph>
      <div className="flex space-x-2">
        <CountDownButton isOpen={isOpen} counter={180} className="bg-yellow-400 border-0">
          🐣
        </CountDownButton>
        <Button onClick={handleReset}>초기화</Button>
        <Button onClick={handleOpen}>결과보기</Button>
      </div>
    </div>
  );
};
