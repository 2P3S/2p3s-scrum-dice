import { ButtonHTMLAttributes } from 'react';

import { OPTION_CARDS } from '@/constants/common';
import classnames from 'classnames';

const getCardStyle = (type: CardType, content: CardContent, vote?: Vote): string => {
  let cardStyle = 'btn no-animation w-20 h-[92px] font-lato';
  const optionCard = OPTION_CARDS.find(optionCard => optionCard.name === content);

  // 현재 vote의 상태로 카드의 뒤집기를 보여준다.
  if (vote?.status) {
    return `${cardStyle} text-6xl hover:cursor-default ${
      type === 'not-cost-type' ? `${optionCard?.class} ` : 'border-slate-400 text-black bg-white hover:bg-white'
    }`;
  }

  if (type === 'cost-type') {
    return `${cardStyle} text-5xl text-white border-0 bg-blue-900 hover:bg-blue-900 hover:-translate-y-4`;
  }

  if (type === 'not-cost-type') {
    const extraClass = `${optionCard?.class} grayscale`;
    return `${cardStyle} ${extraClass}`;
  }

  return cardStyle;
};

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  card: {
    content: CardContent;
    type: CardType;
  };
  vote: Vote;
};

const convertCardContent = (type: CardType, content: CardContent): string | number => {
  if (type === 'cost-type') return content;

  return OPTION_CARDS.find(optionCard => optionCard.name === content)?.emoji as string;
};

export const Card = ({ className, card, vote, ...props }: CardProps) => {
  const { type, content } = card;
  const cardStyle = getCardStyle(type, content, vote);
  const convertedCardContent = convertCardContent(type, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {convertedCardContent}
    </button>
  );
};

type MockCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  cardType: CardType;
  content: CardContent;
};

export const TempCard = () => {
  return <div className="btn no-animation w-20 h-[92px] font-lato text-black bg-white hover:bg-white" />;
};

export const MockCard = ({ className, cardType, content, ...props }: MockCardProps) => {
  const cardStyle = getCardStyle(cardType, content);
  const convertedCardContent = convertCardContent(cardType, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {convertedCardContent}
    </button>
  );
};
