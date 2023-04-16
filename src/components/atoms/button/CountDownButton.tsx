import { useEffect, useState } from 'react';
import classnames from 'classnames';

import { ButtonProps } from './Button';

type CountDownButtonProps = ButtonProps & {
  counter: number;
  onReset?: () => void;
};

export const CountDownButton = ({ children, className, counter, onReset, ...props }: CountDownButtonProps) => {
  const [count, setCount] = useState(counter);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleButtonClick = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  // TODO: 리셋 기능을 어떻게 연결할지 정하기.
  const handleResetClick = () => {
    setIsActive(false);
    setCount(counter);
    onReset?.();
  };

  const formatTime = (count: number | string): string => {
    const seconds = typeof count === 'number' ? count : parseInt(count);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const buttonClassName = classnames(className, 'btn');

  return (
    <button className={buttonClassName} onClick={handleButtonClick} {...props}>
      {formatTime(count)}
      {children}
    </button>
  );
};
