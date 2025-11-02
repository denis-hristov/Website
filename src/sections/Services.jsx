import AnimateIn from "../ui/AnimateIn";
import Section from "../ui/Section";

export default function Services() {
  const items = [
    { t: "Web Design", s: "Clean UI, ясна йерархия и плавни анимации." },
    { t: "React Dev", s: "Vite, Tailwind, Framer Motion – бързо и елегантно." },
    { t: "Brand Kit", s: "Лого, цветове, компоненти, tone of voice." },
  ];
  return (
    <Section id="services" className="bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto">
        <AnimateIn><h2 className="text-4xl md:text-5xl font-extrabold">Services</h2></AnimateIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <AnimateIn key={c.t} delay={i * 0.05}>
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">{c.s}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
}