import { motion } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";
import { Code2, Braces, Palette, Cpu, Database, GitBranch, Cloud, Rocket } from "lucide-react";

const skills = [
  { icon: <Code2 className="w-7 h-7" />, title: "React & Vite", body: "SPAs with hooks, context, routing, and code-splitting.", level: 85, tags: ["React","Vite","JSX"] },
  { icon: <Palette className="w-7 h-7" />, title: "Tailwind CSS", body: "Utility-first UI, responsive layouts, and dark mode.", level: 85, tags: ["Tailwind","Responsive"] },
  { icon: <Braces className="w-7 h-7" />, title: "JavaScript", body: "ES modules, async/await, and best practices.", level: 80, tags: ["JS","ESNext"] },
  { icon: <Cpu className="w-7 h-7" />, title: "Framer Motion", body: "Enter/exit animations and scroll-based transforms.", level: 75, tags: ["Motion","UX"] },
  { icon: <Database className="w-7 h-7" />, title: "Firebase", body: "Auth, Firestore, Hosting, and Functions.", level: 70, tags: ["Firebase","Serverless"] },
  { icon: <GitBranch className="w-7 h-7" />, title: "Git & GitHub", body: "Branching, PRs, code reviews, and CI basics.", level: 75, tags: ["Git","GitHub"] },
  { icon: <Cloud className="w-7 h-7" />, title: "PWA", body: "Service workers, manifest, and offline basics.", level: 65, tags: ["PWA"] },
  { icon: <Rocket className="w-7 h-7" />, title: "Product & UX", body: "Clear user flows, copywriting, and MVP thinking.", level: 70, tags: ["UX","MVP"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Skills</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Practical stack for fast, polished web apps.
          </p>
        </AnimateIn>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass p-6 flex flex-col gap-4 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 text-indigo-500">
                  {s.icon}
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800">
                    {s.level}%
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300">{s.body}</p>

                {/* Progress bar (accessible) */}
                <div className="mt-1">
                  <div
                    className="h-2 w-full rounded-full bg-neutral-200/60 dark:bg-neutral-800 overflow-hidden"
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${s.title} proficiency`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                {s.tags?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}