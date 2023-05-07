import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const STORAGE_KEYS_PREFIX = 'scrum_dice_';

export default function useLocalStorage<T>(key: string, fallbackState: T): [T, Dispatch<SetStateAction<T>>] {
  if (!key) throw new Error(`"storageKey" must be a nonempty string, but "${key}" was passed.`);

  const isMounted = useRef(false);
  const [value, setValue] = useState<T>(fallbackState);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEYS_PREFIX + key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (e) {
      console.log(e);
    }
    return () => {
      isMounted.current = false;
    };
  }, [key]);

  useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem(STORAGE_KEYS_PREFIX + key, JSON.stringify(value));
    } else {
      isMounted.current = true;
    }
  }, [key, value]);

  return [value, setValue];
}
