import { useState, useEffect } from 'react';
interface Iinitial {
  width: undefined | number;
  height: undefined | number;
}
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Iinitial>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return [windowSize.width, windowSize.height];
}
