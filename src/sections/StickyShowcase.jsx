import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import Section from "../ui/Section";
import AnimateIn from "../ui/AnimateIn";

export default function StickyShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end end"] });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);

  const filter = useMotionTemplate`saturate(1.05) contrast(1.02) drop-shadow(0 20px 40px rgba(0,0,0,${glow}))`;

 
  const steps = [
    { k: 0, title: "Set a clear goal", desc: "Define one measurable 90-day outcome and your 'why'. Note your starting metric." },
    { k: 1, title: "Make a simple plan", desc: "Break it into weekly milestones and a daily 30-60 min focus block (learn, practice, ship)." },
    { k: 2, title: "Install habits & environment", desc: "Use a cue + 2-minute starter, schedule it on your calendar, prepare tools the night before." },
    { k: 3, title: "Track & review", desc: "Daily checkbox for consistency; 30-minute weekly review: wins, blockers, next steps." },
    { k: 4, title: "Iterate & scale", desc: "Adjust by 10%, remove friction, add accountability, celebrate small wins, repeat." }
  ];

  return (
    <Section id="showcase" className="py-24 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div className="relative">
          <div className="sticky top-28 flex flex-col gap-16">
            {steps.map((s, i) => (
              <AnimateIn key={s.k} delay={i * 0.15}>
                <div className="text-sm uppercase tracking-widest text-indigo-400">Step {i + 1}</div>
                <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-prose">{s.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-24">
            <motion.div
              style={{ rotate, scale }}
              className="relative aspect-[10/16] rounded-[2.2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-emerald-50 dark:from-indigo-950 dark:via-neutral-900 dark:to-emerald-950" />
              <motion.img
                src="/resurses/IMG_1150.jpg"
                alt="Growth steps visual"
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ filter }}
              />
              <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between text-xs">
                {/* <div className="rounded-full bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 font-medium"></div>
                <div className="rounded-full bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 font-medium"></div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}