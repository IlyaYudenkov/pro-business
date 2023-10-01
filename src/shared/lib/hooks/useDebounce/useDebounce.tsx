import { useEffect, useMemo, useRef } from "react";
import debounce from 'lodash.debounce';

export const useDebounce = (callback: any) => {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = callback;
  }, [callback]);
  
  const debouncedCallback = useMemo(() => {
    const func = () => {
      
      (ref.current as any)?.();
    };
  
    return debounce(func, 700);
  }, []);
  
  return debouncedCallback;
};