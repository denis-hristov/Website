import { useEffect, useState } from "react";
import AnimateIn from "../ui/AnimateIn";
export default function QuoteSection() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("Click for quote!");
  useEffect(() => {
    fetch("/resurses/Quotes.txt", { cache: 'no-store' })
      .then(r => r.text())
      .then(t => {
        const arr = t.split("\n").map(q => q.replace(/^\d+\)\s*/, "").trim()).filter(Boolean);
        setQuotes(arr);
        if (arr.length) setQuote(arr[0]);
      })
      .catch(console.error);
  }, []);
  const next = () => {
    if (!quotes.length) return;
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };
  return (
    <section id="quote" className="py-24 px-6">
      <AnimateIn>
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 text-center flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold">660 Quotes</h2>
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