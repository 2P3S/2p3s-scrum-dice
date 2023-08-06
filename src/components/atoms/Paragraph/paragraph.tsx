import { HTMLAttributes } from 'react';
import classnames from 'classnames';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: 'small' | 'base' | 'large';
};

export const Paragraph = ({ children, className, size, ...props }: ParagraphProps) => {
  const style = classnames(className, {
    'text-sm': size === 'small',
    'text-base': !size || size === 'base',
    'text-lg': size === 'large',
  });

  return (
    <p className={style} {...props}>
      {children}
    </p>
  );
};
