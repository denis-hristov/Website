import { useEffect, useState } from "react";

export default function QuoteSection() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("Click for quote!");

  useEffect(() => {
    fetch("/resurses/Quotes.txt")
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
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  };

  return (
    <section id="quote" className="quote">
      <h1>660 Quotes</h1>
      <div id="quote">{quote}</div>
      <br />
      <button onClick={next}>New quote</button>
    </section>
  );
}