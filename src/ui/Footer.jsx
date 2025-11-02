// ui/Footer.jsx
import { Mail, Github, Instagram, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Home", target: "home" },
  { label: "Service", target: "services" },
  { label: "Work", target: "work" },
  { label: "About", target: "about" },
  { label: "Quotes", target: "quote" },
  { label: "Contacts", target: "contacts" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer id="site-footer"
      className="
        border-t border-neutral-200 dark:border-white/10
        bg-neutral-50/80 dark:bg-neutral-900/60
        backdrop-blur supports-[backdrop-filter]:bg-neutral-50/60
        text-neutral-800 dark:text-neutral-100
      "
      aria-labelledby="site-footer-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 id="site-footer-title" className="text-lg font-semibold">Denis Hristov</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            React / Vite / Tailwind / Framer Motion
          </p>

          <div className="mt-3 flex items-center gap-3">
            {[
              { href: "mailto:denis@example.com", label: "Email", Icon: Mail },
              { href: "https://github.com/denis-hristov", label: "GitHub", Icon: Github },
              { href: "https://instagram.com/denis_hristov", label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                title={label}
                className="
                  inline-flex h-9 w-9 items-center justify-center rounded-full
                  border border-neutral-200 dark:border-white/10
                  bg-white dark:bg-neutral-800/70
                  text-neutral-700 dark:text-neutral-200
                  hover:bg-neutral-100 dark:hover:bg-neutral-700
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                "
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer навигация" className="md:col-span-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV.map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  onClick={(e) => {
                    const exists = document.getElementById(item.target);
                    if (exists) { e.preventDefault(); scrollToId(item.target); }
                  }}
                  className="
                    group inline-flex items-center text-sm
                    text-neutral-700 hover:text-neutral-900
                    dark:text-neutral-300 dark:hover:text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  "
                >
                  {item.label}
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-white/10">
          <p className="py-4 text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Denis Hristov. All rights reserved.
          </p>

          <a
            href="#contacts"
            onClick={(e) => {
              const el = document.getElementById("contacts");
              if (el) { e.preventDefault(); scrollToId("contacts"); }
            }}
            className="
              text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-md
              border border-neutral-200 dark:border-white/10
              bg-white dark:bg-neutral-800/70 hover:bg-neutral-100 dark:hover:bg-neutral-700
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
            "
          >
            Contact me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}