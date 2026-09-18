import { CalendarDays, Lightbulb, Sparkles } from "lucide-react";

export default function FactsMark() {
  return (
    <div
      className="relative mx-auto h-16 w-24"
      aria-label="Geo facts illustration"
      role="img"
    >
      <span className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-glow-sm">
        <Sparkles size={16} />
      </span>
      <span className="absolute bottom-0 left-0 flex h-11 w-20 items-center gap-2 rounded-xl border border-border-light/50 bg-background-card/35 px-2.5 text-accent shadow-glow-sm backdrop-blur-xl">
        <Lightbulb size={16} />
        <span className="flex flex-col gap-1">
          <span className="h-1 w-8 rounded-full bg-accent/70" />
          <span className="h-1 w-11 rounded-full bg-ink-faint/50" />
        </span>
        <CalendarDays size={12} className="ml-auto text-ink-faint" />
      </span>
    </div>
  );
}
