import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'submit';
  loading?: boolean;
  state?: 'info' | 'success' | 'warning' | 'error';
};

export const Button = ({ children, className, type, loading, state, ...props }: ButtonProps) => (
  <button
    type={type || 'button'}
    className={classnames(className, 'btn', { [`btn-${state}`]: state }, { loading })}
    {...props}
  >
    {children}
  </button>
);
