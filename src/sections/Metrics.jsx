import { useEffect, useRef, useMemo } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";

// Inclusive days between a start ISO date (YYYY-MM-DD) and *today* (UTC-based).
function daysSince(startIso /* e.g. "2025-10-06" */) {
  const [y, m, d] = startIso.split("-").map(Number);
  const startUTC = Date.UTC(y, m - 1, d);
  const now = new Date();
  const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const diffDays = Math.floor((todayUTC - startUTC) / 86400000);
  return Math.max(0, diffDays + 1); // +1 for inclusive counting
}

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
      if (ref.current) ref.current.textContent = Math.round(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

export default function Metrics() {
  // 06.10.2025 -> Daily posts (или Daily motivation — както предпочиташ)
  const dailyMotivation = useMemo(() => daysSince("2025-10-06"), []);
  // 01.09.2025 -> Daily trainings
  const dailyTraining = useMemo(() => daysSince("2025-09-01"), []);

  const metrics = [
    { label: "Projects shipped", value: 3 },
    { label: "Projects built", value: 11 },
    { label: "Courses passed", value: 27 },
    { label: "Daily completed", value: dailyMotivation },
    { label: "YouTube videos", value: 140 },
    { label: "YouTube subscribers", value: 800 },
    { label: "Daily training", value: dailyTraining },
  ];

  return (
    <section id="metrics" className="py-24 px-6 bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Numbers that grow</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Animated, legible figures that reinforce credibility without shouting.
          </p>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <AnimateIn key={m.label} delay={i * 0.05}>
              <div className="glass p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-indigo-500">
                  <CountUp to={m.value} />
                </div>
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {m.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}