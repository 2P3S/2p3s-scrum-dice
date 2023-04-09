import React from 'react';
import classnames from 'classnames';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'base' | 'large';
}

export const Paragraph = ({ children, className, color, size, ...props }: ParagraphProps) => {
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
