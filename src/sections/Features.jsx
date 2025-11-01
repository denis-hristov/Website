import { motion } from "framer-motion";
import Section from "../ui/Section";
import { Cpu, Rocket, Sparkles } from "lucide-react";


export default function Features() {
  const items = [
    { icon: <Cpu className="size-6" />, title: "Performance‑first", body: "Vite + React + Motion. Minimal scripts, maximal feel." },
    { icon: <Rocket className="size-6" />, title: "Scroll storytelling", body: "Sections reveal and transform as you read." },
    { icon: <Sparkles className="size-6" />, title: "Tasteful motion", body: "Delightful micro‑interactions without getting in the way." }
  ];


  return (
    <Section id="features" className="bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-900/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Designed to feel premium</h2>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">A clean aesthetic, generous whitespace, and motion that serves the story.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="size-11 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/15 to-emerald-500/15 text-neutral-900 dark:text-white">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}