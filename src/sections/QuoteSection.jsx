import { useEffect, useState } from "react";
import AnimateIn from "../ui/AnimateIn";

function pickRandomIndex(len, exclude = -1) {
  if (!len) return -1;
  let i = Math.floor(Math.random() * len);
  if (len > 1 && i === exclude) i = (i + 1) % len;
  return i;
}

export default function QuoteSection() {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    let cancelled = false;

    fetch("/resurses/Quotes.txt", { cache: "no-store" })
      .then(r => r.text())
      .then(t => {
        if (cancelled) return;
        const arr = t
          .split(/\r?\n/)
          .map(q => q.replace(/^\s*\d+\)\s*/, "").trim())
          .filter(Boolean);

        setQuotes(arr);
        setCurrent(pickRandomIndex(arr.length)); // ← РАНДОМ още при зареждане
      })
      .catch(console.error);

    return () => { cancelled = true; };
  }, []);

  const next = () => {
    if (!quotes.length) return;
    setCurrent(prev => pickRandomIndex(quotes.length, prev)); // без моментално повторение
  };

  const quote = current >= 0 ? quotes[current] : "Loading…";

  return (
    <section id="quote" className="py-24 px-6">
      <AnimateIn>
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 text-center flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold">
            {quotes.length ? `${quotes.length} Quotes` : "Quotes"}
          </h2>
          <p className="text-xl italic text-neutral-600 dark:text-neutral-300">“{quote}”</p>
          <button
            onClick={next}
            className="self-center px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:scale-105 transition"
          >
            New quote
          </button>
        </div>
      </AnimateIn>
    </section>
  );
}