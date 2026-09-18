import { CalendarDays, ExternalLink, Lightbulb } from "lucide-react";
import FactsMark from "../components/common/FactsMark.jsx";
import { facts } from "../data/facts.js";

export default function Facts() {
  return (
    <div className="relative h-full overflow-y-auto">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <header className="animate-fade-up mx-auto max-w-3xl text-center opacity-0">
          <FactsMark />
          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
            Field notes for curious minds
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold italic tracking-tight text-ink sm:text-5xl">
            Geo Facts
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
            Small, surprising stories about the environments, places and systems we map.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <article
              key={fact.id}
              className="animate-fade-up group relative flex flex-col overflow-hidden rounded-3xl border border-border-light/45 bg-background-card/25 p-6 opacity-0 shadow-glow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-background-card/40 hover:shadow-glow"
              style={{ animationDelay: `${100 + index * 90}ms` }}
            >
              <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between text-xs text-ink-faint">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} />
                  Updated {fact.date}
                </span>
                <Lightbulb size={16} className="text-accent" />
              </div>
              <h2 className="mt-6 font-serif text-xl font-semibold italic leading-snug text-ink">
                {fact.title}
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-accent">{fact.summary}</p>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-ink-muted">{fact.detail}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={fact.referenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border-light px-2.5 py-1.5 text-[11px] font-medium text-ink-faint transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <ExternalLink size={12} />
                  Reference
                </a>
                <span className="text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  Source included
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
