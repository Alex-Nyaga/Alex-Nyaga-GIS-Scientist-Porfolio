import { useEffect, useState } from "react";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { facts } from "../../data/facts.js";

export default function FactTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const fact = facts[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % facts.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="shrink-0 border-t border-border/50 bg-background-surface/35 px-6 py-4 backdrop-blur-2xl lg:px-10"
      aria-label="Featured geo fact"
    >
      <div className="mx-auto max-w-7xl">
      <Link
        to="/facts"
        className="group flex items-center justify-between gap-4 rounded-xl border border-border-light/50 bg-background-card/30 px-4 py-3 shadow-glow-sm backdrop-blur-xl transition-colors duration-200 hover:border-accent/50 hover:bg-background-elevated/40 sm:px-5"
      >
        <div className="flex min-w-0 items-start gap-3">
          <Lightbulb size={17} className="mt-0.5 shrink-0 text-accent" />
          <div className="min-w-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-accent sm:text-[10px] sm:tracking-[0.18em]">
              Did you know?
            </p>
            <p className="mt-0.5 font-serif text-[11px] italic leading-snug text-ink-muted sm:mt-1 sm:text-base sm:leading-relaxed">
              {fact.summary}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-[10px] text-ink-faint sm:gap-2 sm:text-xs">
          <span className="hidden sm:inline">Read facts</span>
          <ArrowUpRight size={13} />
        </div>
      </Link>
      </div>
    </section>
  );
}
