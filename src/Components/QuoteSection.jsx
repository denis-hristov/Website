import { useState, useEffect } from "react";



export default function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("Click for quote!");
    const [lastIndex, setLastIndex] = useState(null);

    useEffect(() => {
      fetch("/resurses/Quotes.txt")
        .then((response) => response.text())
        .then((text) => {
          const quotesArray = text.split("\n").map(q => q.replace(/^\d+\)\s*/, "").trim());
          setQuotes(quotesArray);
        })
        .catch((error) => console.error("Error loading quotes:", error));
    }, []);

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    
    setLastIndex(randomIndex);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
    <div className="quote">
        <h1>660 Quote</h1>
        <div id="quote">{quote}</div>
        <br/>
        <button onClick={getRandomQuote}>New quote</button>
    </div>
    </>
  );
}
