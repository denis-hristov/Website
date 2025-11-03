import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton({
  threshold = 240,
  to = "top",
  avoidFooterId = "site-footer",   // NEW: футър, над който да стоим
  baseBottom = 20,                  // базов отстъп отдолу (px)
}) {
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(baseBottom);

  // показване/скриване
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // вдигане над футъра
  useEffect(() => {
    const computeBottom = () => {
      const vh = window.innerHeight;
      const footer = avoidFooterId ? document.getElementById(avoidFooterId) : null;

      let extra = 0;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const overlap = Math.max(0, vh - rect.top); // колко футърът „влиза“ в екрана
        if (overlap > 0) {
          extra = overlap + 12; // 12px буфер над футъра
        }
      }
      // не качваме бутона прекалено високо (макс 40% от екрана)
      const clamped = Math.min(baseBottom + extra, Math.floor(vh * 0.4));
      setBottom(clamped);
    };

    computeBottom();
    window.addEventListener("scroll", computeBottom, { passive: true });
    window.addEventListener("resize", computeBottom);
    return () => {
      window.removeEventListener("scroll", computeBottom);
      window.removeEventListener("resize", computeBottom);
    };
  }, [avoidFooterId, baseBottom]);

  const jump = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anchor = to ? document.getElementById(to) : null;
    if (anchor) anchor.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={jump}
      aria-label="Up"
      title="Up"
      style={{ bottom: `${bottom}px` }}
      className={`fixed right-5 z-[120] inline-flex h-11 w-11 items-center justify-center
                  rounded-full border border-neutral-200 dark:border-white/10
                  bg-white/90 dark:bg-neutral-800/70 backdrop-blur
                  text-neutral-700 dark:text-neutral-200
                  shadow-lg transition-transform duration-200 ease-out
                  hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-700
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
