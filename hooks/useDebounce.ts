import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value]);

  return state;
};

export default useDebounce;
