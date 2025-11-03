import AnimateIn from "../ui/AnimateIn";
import Section from "../ui/Section";

export default function Work() {
  const projects = [
  { t: "Personal Website", s: "One-page site with scroll animations and PWA.", 
    live: "https://denis-hristov-website.web.app/", code: "https://github.com/denis-hristov/Website" },
  { t: "Client Portal", s: "Data filtering and charts (React).", 
    code: "https://github.com/denis-hristov/Project-Client-Portal" },
  { t: "Scheduler App", s: "Employees, tasks and daily planning.", 
    code: "https://github.com/denis-hristov/Scheduler-employees-work" },
  ];
  return (
    <Section id="work">
      <div className="max-w-6xl mx-auto">
        <AnimateIn><h2 className="text-4xl md:text-5xl font-extrabold">Work</h2></AnimateIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimateIn key={p.t} delay={i * 0.05}>
              <div className="glass p-6 rounded-2xl">
                <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-200 via-white to-emerald-100 dark:from-indigo-900 dark:via-neutral-900 dark:to-emerald-900" />
                <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.s}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
}