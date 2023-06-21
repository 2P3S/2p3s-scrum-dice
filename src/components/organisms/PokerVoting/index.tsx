import useMemberStore from '@/store/useMemberStore';

import { Card } from '@/components/atoms/Card';
import { OptionCard } from '@/components/molecules/OptionCard';
import { Paragraph } from '@/components/atoms/paragraph';

import { OPTION_CARDS } from '@/constants/common';

type PokerVotingProps = {
  players: Player[];
  isOpen: boolean;
};

export const PokerVoting = ({ players, isOpen }: PokerVotingProps) => {
  const member = useMemberStore(state => state.member);

  const findOptionCard = (player: Player): OptionCard => {
    const optionCard = OPTION_CARDS.find(card => card.name === player.card.value);

    if (optionCard === undefined)
      return {
        name: 'Error...',
        emoji: '❌',
        class: '',
        selected: true,
      };

    return optionCard;
  };

  // TODO: 맴버 데이터가 없을경우 에러핸들링
  if (member === undefined) return <>Error! no data...</>;

  return (
    <div className="flex space-x-4">
      {players.map(player => (
        <div key={player.id}>
          {player.card.type === 'poker' ? (
            <Card state={player.id === member.id ? 'openedMe' : isOpen ? 'openedOther' : 'openedBefore'}>
              {player.card.value}
            </Card>
          ) : (
            <OptionCard
              state={player.id === member.id ? 'openedMe' : isOpen ? 'openedOther' : 'openedBefore'}
              labelVisibility={false}
              option={findOptionCard(player)}
            />
          )}

          <Paragraph size="small" className="mt-2 ml-1">
            {player.name}
          </Paragraph>
        </div>
      ))}
    </div>
  );
};
