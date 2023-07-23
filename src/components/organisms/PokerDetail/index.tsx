import { Button, CountDownButton } from '@/components/atoms/Button';
import { Title } from '@/components/atoms/Title';
import { Paragraph } from '@/components/atoms/Paragraph';
import clipboardCopy from 'clipboard-copy';

type PokerDetailProps = {
  room: Room;
  vote: Vote;
};

export const PokerDetail = ({ room, vote }: PokerDetailProps) => {
  const handleResetCard = () => {
    // TODO: socket - reset-card
  };
  const handleOpenCard = () => {
    // TODO: socket - open-card
  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    clipboardCopy(currentUrl)
      .then(() => {
        alert(`URL copied to clipboard: ${currentUrl}`);
      })
      .catch(e => {
        alert(`Failed to copy URL to clipboard: ${e}`);
      });
  };

  return (
    <div className="py-10 mb-10 border-b-2 border-slate-100">
      <div className="flex justify-between">
        <Title headingLevel="h3">{room.name}</Title>
        <Button onClick={handleCopyUrl}>URL COPY</Button>
      </div>
      <Paragraph size="large" className="mb-4">
        🎲 {vote.name} 🎲
      </Paragraph>
      <div className="flex space-x-2">
        <CountDownButton isOpen={vote.status} counter={180} className="bg-yellow-400 border-0">
          🐣
        </CountDownButton>
        <Button onClick={handleResetCard}>초기화</Button>
        <Button onClick={handleOpenCard}>결과보기</Button>
      </div>
    </div>
  );
};
