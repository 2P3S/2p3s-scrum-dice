import { ButtonHTMLAttributes } from 'react';

import { OPTION_CARDS } from '@/constants/common';
import classnames from 'classnames';

const getCardStyle = (type: CardType, status: boolean, content: CardContent, vote?: Vote): string => {
  let cardStyle = 'btn no-animation w-20 h-[92px] font-lato';
  const optionCard = OPTION_CARDS.find(optionCard => optionCard.name === content);

  if (vote?.status) {
    return `${cardStyle} text-6xl hover:cursor-default ${
      type === 'not-cost-type' ? `${optionCard?.class} ` : 'border-slate-400 text-black bg-white hover:bg-white'
    }`;
  }

  if (type === 'cost-type') {
    const bgClass = status ? 'bg-blue-900' : 'bg-blue-500';
    return `${cardStyle} text-5xl text-white border-0 ${bgClass} hover:bg-blue-900 hover:-translate-y-4`;
  }

  if (type === 'not-cost-type') {
    const extraClass = status ? `${optionCard?.class} grayscale` : `${optionCard?.class} hover:-translate-y-4`;
    return `${cardStyle} ${extraClass}`;
  }

  return cardStyle;
};

type TempCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  card: Card;
};

const convertCardContent = (type: CardType, content: CardContent): string | number => {
  if (type === 'cost-type') return content;

  return OPTION_CARDS.find(optionCard => optionCard.name === content)?.emoji as string;
};

export const Card = ({ className, card, ...props }: TempCardProps) => {
  const { type, status, content, vote } = card;
  const cardStyle = getCardStyle(type, status, content, vote);
  const convertedCardContent = convertCardContent(type, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {convertedCardContent}
    </button>
  );
};

type MockCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  cardType: CardType;
  status: boolean;
  content: CardContent;
};

export const MockCard = ({ className, cardType, status, content, ...props }: MockCardProps) => {
  const cardStyle = getCardStyle(cardType, status, content);
  const convertedCardContent = convertCardContent(cardType, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {convertedCardContent}
    </button>
  );
};
