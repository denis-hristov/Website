import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value }) {
  const ref = useRef(null); const [shown, setShown] = useState(0);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; const start = performance.now(); const tick = now => { const x = Math.min(1, (now - start) / 1200); setShown(Math.round(value * (1 - Math.pow(1 - x, 3)))); if (x < 1) requestAnimationFrame(tick) }; requestAnimationFrame(tick); observer.disconnect() }, { threshold: .3 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect() }, [value]);
  return <b ref={ref}>{shown}</b>;
}
