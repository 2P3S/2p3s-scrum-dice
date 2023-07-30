import { ButtonHTMLAttributes } from 'react';

import { OPTION_CARDS } from '@/constants/common';
import classnames from 'classnames';

const getCardStyle = (type: CardType, content: CardContent, vote?: Vote, isPokerBoard?: boolean): string => {
  let cardStyle = 'btn no-animation w-20 h-[92px] font-lato';
  const optionCard = OPTION_CARDS.find(optionCard => optionCard.name === content);

  if (isPokerBoard) {
    if (type === 'cost-type') {
      return `${cardStyle} text-4xl text-white border-0 bg-blue-700 hover:bg-blue-700 hover:-translate-y-4`;
    }

    if (type === 'not-cost-type') {
      const extraClass = `${optionCard?.class} text-4xl grayscale`;
      return `${cardStyle} ${extraClass}`;
    }
  }

  // 현재 vote의 상태로 카드의 뒤집기를 보여준다.
  if (vote && vote.status === false) {
    return `${cardStyle} text-4xl hover:cursor-default ${
      type === 'not-cost-type' ? `${optionCard?.class} ` : 'text-white border-slate-400 bg-slate-400 hover:bg-slate-400'
    }`;
  }

  return cardStyle;
};

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  card: {
    content: CardContent;
    type: CardType;
  };
  vote: Vote;
  isMe: boolean;
};

const convertCardContent = (type: CardType, content: CardContent): string | number => {
  if (type === 'cost-type') return content;

  return OPTION_CARDS.find(optionCard => optionCard.name === content)?.emoji as string;
};

export const Card = ({ className, card, vote, isMe, ...props }: CardProps) => {
  const { type, content } = card;
  const cardStyle = getCardStyle(type, content, vote);
  const convertedCardContent = convertCardContent(type, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {vote.status || isMe ? convertedCardContent : ''}
    </button>
  );
};

type MockCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  cardType: CardType;
  content: CardContent;
  isPokerBoard?: boolean;
};

export const TempCard = () => {
  return <div className="btn no-animation w-20 h-[92px] font-lato text-black bg-white hover:bg-white" />;
};

export const MockCard = ({ className, cardType, content, isPokerBoard, ...props }: MockCardProps) => {
  const cardStyle = getCardStyle(cardType, content, undefined, isPokerBoard);
  const convertedCardContent = convertCardContent(cardType, content);

  return (
    <button className={classnames(className, cardStyle)} {...props}>
      {convertedCardContent}
    </button>
  );
};
