// src/ui/Footer.jsx
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
    <footer
      className="
        border-t bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
      "
      aria-labelledby="site-footer-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 id="site-footer-title" className="text-lg font-semibold">
            Denis Hristov
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            React / Vite / Tailwind / Framer Motion
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="mailto:denis@example.com"
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label="Имейл"
              title="Имейл"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/denis-hristov"
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/denis_hristov"
              target="_blank"
              rel="noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
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
                    if (exists) {
                      e.preventDefault();
                      scrollToId(item.target);
                    }
                  }}
                  className="group inline-flex items-center text-sm text-gray-700 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {item.label}
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 flex items-center justify-between pt-2 border-t">
          <p className="py-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Denis Hristov. All rights reserved.
          </p>
          <a
            href="#contacts"
            onClick={(e) => {
              const el = document.getElementById("contacts");
              if (el) {
                e.preventDefault();
                scrollToId("contacts");
              }
            }}
            className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Свържи се с мен
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}