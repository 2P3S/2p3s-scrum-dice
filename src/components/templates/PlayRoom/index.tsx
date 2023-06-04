import { useEffect, useState } from 'react';

import { PokerDetail } from '@/components/organisms/PokerDetail';
import { PokerBoard } from '@/components/organisms/PokerBoard';
import { PokerVoting } from '@/components/organisms/PokerVoting';

import { FIBONACCI_NUMBERS, OPTION_CARDS, players } from '@/constants/common';

export const PlayRoom = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedCard, setSelectedCard] = useState<SelectedCard>({
    type: 'poker',
    value: 1,
  });

  const pokerCards = FIBONACCI_NUMBERS;
  const optionCards = OPTION_CARDS.filter(card => card.name !== 'Egg Timer');

  const handleReset = () => {
    // TODO: socket으로 리셋 신호 보내기.
    setIsOpen(!isOpen);
    setSelectedCard({
      type: 'poker',
      value: 0,
    });
  };

  const handleOpen = () => {
    // TODO: socket으로 리셋 신호 보내기.
    if (isOpen === true) return;

    setIsOpen(true);
  };

  useEffect(() => {
    const hasEggTimer = optionCards.find(card => card.name === 'Egg Timer' && card.selected);
    console.log('hasEggTimer', hasEggTimer);
  }, [optionCards]);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      <PokerDetail isOpen={isOpen} handleOpen={handleOpen} handleReset={handleReset} />
      <PokerVoting players={players} isOpen={isOpen} />
      <PokerBoard
        pokerCards={pokerCards}
        optionCards={optionCards}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
};
