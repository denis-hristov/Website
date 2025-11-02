import { color, motion } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-emerald-50
                      dark:from-indigo-950 dark:via-neutral-900 dark:to-emerald-950" />
      <AnimateIn>
        <div className="glass max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-8 p-8 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-indigo-500">Welcome</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--c-text)]">
              <u style={{ color: 'red' }}>Work in progress!</u> Don't wait for the perfect moment. <span className="text-indigo-500">Make it.</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Denis Hristov</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 8 }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            <img
              src="/resurses/ProfilPhoto.jpg"
              alt="Denis"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-400 to-emerald-400 opacity-30 blur-2xl -z-10" />
          </motion.div>
        </div>
      </AnimateIn>
    </section>
  );
}