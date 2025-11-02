import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";

const metrics = [
  { label: "Projects", value: 18 },
  { label: "Repos", value: 12 },
  { label: "Clients Helped", value: 9 },
  { label: "Daily Quotes", value: 660 },
];

function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = to;
    if (start === end) return;
    const duration = 1200;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      ref.current.textContent = Math.round(start);
    }, 16);
  }, [inView, to]);
  return <span ref={ref}>0</span>;
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 px-6 bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Numbers that grow</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">Animated, legible figures that reinforce credibility without shouting.</p>
        </AnimateIn>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map((m,i) => (
            <AnimateIn key={m.label} delay={i*0.05}>
              <div className="glass p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-indigo-500">
                  <CountUp to={m.value} />
                </div>
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{m.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}