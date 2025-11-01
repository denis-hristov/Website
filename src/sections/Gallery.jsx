import { motion } from "framer-motion";
import Section from "../ui/Section";


export default function Gallery() {
  const cards = [
    { t: "Clarity", s: "Less noise, more signal." },
    { t: "Precision", s: "Every pixel considered." },
    { t: "Speed", s: "Fast loads, faster feels." },
    { t: "Delight", s: "Moments that spark joy." }
  ];


  return (
    <Section id="gallery">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold">A gallery of moments</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">Cards tilt slightly on hover and parallax into view for a sense of depth.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ rotateX: -4, rotateY: 6, translateZ: 10 }}
              className="[transform-style:preserve-3d] perspective-1000 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-lg"
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-200 via-white to-emerald-100 dark:from-indigo-900 dark:via-neutral-900 dark:to-emerald-900" />
              <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{c.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}