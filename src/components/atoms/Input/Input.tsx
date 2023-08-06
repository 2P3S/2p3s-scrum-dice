import { HTMLAttributes } from 'react';
import classnames from 'classnames';

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password' | 'email'; // 또는 다른 input 타입
  label?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

export const Input = ({
  children,
  className,
  type = 'text',
  label,
  disabled,
  onChange,
  value,
  placeholder,
  ...props
}: InputProps) => {
  const style = classnames(className, 'input input-bordered');

  return (
    <div>
      {label && (
        <label className="label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className={style}
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      {children}
    </div>
  );
};
