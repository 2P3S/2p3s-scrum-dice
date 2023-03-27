import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit';
  loading?: boolean;
}

const Button = ({ children, className, type, loading, ...props }: ButtonProps) => (
  <button type={type || 'button'} className={classnames(className, 'btn', { loading })} {...props}>
    {children}
  </button>
);

export default Button;
