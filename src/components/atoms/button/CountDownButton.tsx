import { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';

import { ButtonProps } from './Button';

export type CountDownButtonProps = ButtonProps & {
  counter: number;
  onReset?: () => void;
};

export const CountDownButton = ({ children, className, counter, onReset, ...props }: CountDownButtonProps) => {
  const [count, setCount] = useState(counter);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isCounting) {
      intervalId = setInterval(() => {
        setCount(prevCount => {
          if (typeof prevCount === 'string') return prevCount;
          if (prevCount <= 1) {
            setIsCounting(false);
            clearInterval(intervalId);
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCounting]);

  const toggleCounting = useCallback(() => {
    setIsCounting(prevIsCounting => !prevIsCounting);
  }, []);

  // TODO: 리셋 기능을 어떻게 연결할지 정하기.
  const handleResetClick = () => {
    setIsCounting(false);
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
    <button className={buttonClassName} onClick={toggleCounting} {...props}>
      {formatTime(count)}
      {children}
    </button>
  );
};
