import { HTMLAttributes } from 'react';
import classnames from 'classnames';

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  headingLevel: 'h1' | 'h2' | 'h3';
  emoji?: string;
};

export const Title = ({ children, className, headingLevel: HeadingLevel = 'h1', emoji, ...props }: TitleProps) => {
  const style = classnames(className, {
    'text-5xl': HeadingLevel === 'h1',
    'text-4xl': HeadingLevel === 'h2',
    'text-3xl': HeadingLevel === 'h3',
  });

  return (
    <HeadingLevel className={style} {...props}>
      {emoji && <span className="mr-2">{emoji}</span>}
      {children}
    </HeadingLevel>
  );
};
