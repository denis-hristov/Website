import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "./scrollTo";

const navLinks = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#services", label: "Service" },
  { href: "#work",     label: "Work" },
  { href: "#quote",    label: "Quotes" },
  { href: "#contacts", label: "Contacts" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-[var(--c-text)]"
          onClick={(e) => { e.preventDefault(); scrollToId("#home"); setOpen(false); }}
        >
          Denis Hristov
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-expanded={open}>
          <div className="w-6 h-0.5 bg-current mb-1" />
          <div className="w-6 h-0.5 bg-current mb-1" />
          <div className="w-6 h-0.5 bg-current" />
        </button>

        <nav className="hidden md:flex gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollToId(l.href); }}
              className="px-3 py-2 rounded-lg hover:bg-indigo-500/10 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <nav className="md:hidden overflow-hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollToId(l.href); setOpen(false); }}
                className="block px-6 py-3 border-t border-white/10 hover:bg-indigo-500/10"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}