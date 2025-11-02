import { motion } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";
import { Cpu, Rocket, Sparkles } from "lucide-react";
const cards = [
  { icon: <Cpu className="w-7 h-7" />, title: "Performance-first", body: "Vite + React + Motion. Minimal scripts, maximal feel." },
  { icon: <Rocket className="w-7 h-7" />, title: "Scroll storytelling", body: "Sections reveal and transform as you read." },
  { icon: <Sparkles className="w-7 h-7" />, title: "Tasteful motion", body: "Delightful micro-interactions without getting in the way." },
];
export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Designed to feel premium</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">A clean aesthetic, generous whitespace, and motion that serves the story.</p>
        </AnimateIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c,i) => (
            <AnimateIn key={i} delay={i*0.1}>

              <motion.div

                whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass p-6 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 text-indigo-500">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--c-text)]">{c.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.body}</p>
              
              </motion.div>
              
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}