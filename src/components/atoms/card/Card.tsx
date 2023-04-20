import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

type CardState = 'openedMe' | 'openedOther' | 'selectable' | 'selected';

const cardClassNames: Record<CardState, string> = {
  selected: 'text-5xl border-0 bg-blue-900 hover:bg-blue-900 -translate-y-4',
  selectable: 'text-5xl border-0 bg-blue-500 hover:bg-blue-900 hover:-translate-y-4',
  openedMe: 'text-6xl border-0 bg-slate-400 hover:bg-slate-400 hover:cursor-default',
  openedOther:
    'text-6xl border-slate-400 text-black bg-white hover:bg-white hover:cursor-default hover:border-slate-400',
};

export type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  state: CardState;
};

export const Card = ({ children, className, state, ...props }: CardProps) => {
  const cardStyle = cardClassNames[state];
  const classNames = classnames(className, 'btn no-animation w-20 h-[92px] font-lato', cardStyle);

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
