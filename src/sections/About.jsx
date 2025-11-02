import { motion } from "framer-motion";
import AnimateIn from "../ui/AnimateIn";
const blocks = [
  { title: "Why I Do What I Do", img: "/resurses/Aspire 1.jpg", text: ["I’m driven by a deep desire to contribute to society through innovation and impact...","With experience across multiple domains..."] },
  { title: "My 5-Year Vision", img: "/resurses/Aspire 2.jpg", text: ["My biggest goal is to build a sustainable and impactful business...","Surrounding myself with inspiring individuals..."], reverse:true },
  { title: "The Business I’m Building", img: "/resurses/Aspire 3.jpg", text: ["I’m building a company that empowers people...","My website already features a prototype of a quote generator..."], button:"Try the Quote Generator", href:"/quoteGenerator" },
  { title: "Giving Back Matters", img: "/resurses/Aspire 4.jpg", text: ["I've participated in charitable sales...","Through these initiatives..."], reverse:true },
  { title: "Moments That Shaped Me", img: "/resurses/Aspire 5.jpg", text: ["One moment that deeply impacted me...","Another milestone is my YouTube channel..."] },
  { title: "The Turning Point", img: "/resurses/Aspire 6.jpg", text: ["Everything changed in 10th grade...","That decision built my discipline..."], reverse:true },
];
export default function About() {
  return (
    <section id="about" className="section py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto grid gap-16">
        {blocks.map((b,i) => (
          <AnimateIn key={i} delay={i*0.1}>
            <div className={`grid md:grid-cols-2 gap-8 items-center ${b.reverse ? "md:flex-row-reverse" : ""}`}>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-[var(--c-text)]">{b.title}</h3>
                {b.text.map(p => <p key={p} className="text-neutral-600 dark:text-neutral-300">{p}</p>)}
                {b.button && (
                  <a href={b.href} className="self-start mt-2 px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:scale-105 transition">
                    {b.button}
                  </a>
                )}
              </div>
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={b.img} alt={b.title}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}