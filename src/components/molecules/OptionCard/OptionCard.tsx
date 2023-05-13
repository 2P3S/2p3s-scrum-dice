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
  labelVisibility?: boolean;
};

export const OptionCard = ({ option, labelVisibility = true }: OptionCardProps) => (
  <>
    <button
      className={classnames(
        'btn w-20 h-24 rounded-lg text-[64px] shadow-lg border-none hover:-translate-y-4',
        option.class,
        option.selected === false && ' grayscale',
      )}
    >
      {option.emoji}
    </button>
    {labelVisibility && (
      <Paragraph size="small" className="mt-2">
        {option.name}
      </Paragraph>
    )}
  </>
);
