"use client"

import React from "react";

export function useClickOutside <T extends HTMLElement>(callback: () => void) {
  const ref = React.useRef<T>(null);
  
  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
  
    document.addEventListener('click', handleClick, true);
  
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);
  
  return ref;
};