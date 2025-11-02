import AnimateIn from "../ui/AnimateIn";
import { motion } from "framer-motion";
const cards = [
  { t: "Clarity", s: "Less noise, more signal." },
  { t: "Precision", s: "Every pixel considered." },
  { t: "Speed", s: "Fast loads, faster feels." },
  { t: "Delight", s: "Moments that spark joy." },
];
export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">A gallery of moments</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">Cards tilt slightly on hover and parallax into view for a sense of depth.</p>
        </AnimateIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c,i) => (
            <AnimateIn key={i} delay={i*0.08}>
              <motion.div
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.04, z: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass p-6 flex flex-col gap-3"
              >
                <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-200 via-white to-emerald-100 dark:from-indigo-900 dark:via-neutral-900 dark:to-emerald-900" />
                <h3 className="text-lg font-semibold text-[var(--c-text)]">{c.t}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.s}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}