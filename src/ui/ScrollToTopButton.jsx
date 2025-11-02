import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton({ threshold = 240, to = "top" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const jump = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anchor = to ? document.getElementById(to) : null;
    if (anchor) {
      anchor.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={jump}
      aria-label="Up"
      title="Up"
      className={`fixed z-50 bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center
                  rounded-full border bg-white/90 backdrop-blur shadow-md
                  transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}