import { useEffect, useState } from 'react';

export default function useTimedCycle(count, delay) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % count);
    }, delay);
    return () => clearInterval(timer);
  }, [count, delay]);

  return index;
}
