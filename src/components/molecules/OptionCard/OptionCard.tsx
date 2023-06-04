import classnames from 'classnames';

import { Paragraph } from '@/components/atoms/paragraph';

export type Option = {
  name: string;
  emoji: string;
  class: string;
  selected: boolean;
};

export type OptionCardProps = {
  option: Option;
  state: CardState;
  labelVisibility?: boolean;
  handleClick?: () => void; // 클릭 핸들러 함수 타입을 명시합니다.
};

type CardState = 'openedMe' | 'openedOther' | 'openedBefore' | 'selectable' | 'selected';

const cardClassNames: Record<CardState, string> = {
  selected: 'border-none -translate-y-4',
  selectable: 'border-none hover:-translate-y-4',
  openedMe: 'border-0 bg-slate-400 hover:bg-slate-400 hover:cursor-default',
  openedOther: 'border-slate-400 hover:cursor-default hover:border-slate-400',
  openedBefore: 'btn-square loading cursor-default border-slate-400 hover:border-slate-400',
};

export const OptionCard = ({ option, state, labelVisibility = true, handleClick }: OptionCardProps) => {
  return (
    <>
      {state === 'openedBefore' ? (
        <div className={classnames('btn no-animation w-20 h-[92px] rounded-lg text-[64px]', cardClassNames[state])} />
      ) : (
        <>
          <button
            className={classnames(
              'btn no-animation w-20 h-[92px] rounded-lg text-[64px]',
              option.class,
              option.selected === false && ' grayscale',
              cardClassNames[state],
            )}
            onClick={handleClick} // handleClick 함수를 버튼의 onClick 이벤트에 연결합니다.
          >
            {option.emoji}
          </button>
          {labelVisibility && (
            <Paragraph size="small" className="mt-2">
              {option.name}
            </Paragraph>
          )}
        </>
      )}
    </>
  );
};
