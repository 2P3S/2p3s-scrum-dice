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
};

export const OptionCard = ({ option }: OptionCardProps) => (
  <>
    <button
      className={classnames(
        'w-20 h-24 rounded-lg text-[64px] shadow-lg',
        option.class,
        option.selected === false && ' grayscale',
      )}
    >
      {option.emoji}
    </button>
    <Paragraph size="small" className="mt-2">
      {option.name}
    </Paragraph>
  </>
);
