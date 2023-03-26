import React, { FC } from 'react';
import classnames from 'classnames';

type ButtonProps = {
  type?: 'submit';
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type, loading, ...props }: ButtonProps) => (
  <button {...props} type={type || 'button'} className={classnames('btn', { loading })}>
    {children}
  </button>
);

export default Button;
