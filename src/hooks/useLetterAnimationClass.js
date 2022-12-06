import { useEffect, useState } from "react";

const DEFAULT_DELAY = 3000;

export const useLetterAnimationClass = (delay = DEFAULT_DELAY) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass(`text-animate-hover`);
    }, delay);
  }, [delay]);

  return letterClass;
};