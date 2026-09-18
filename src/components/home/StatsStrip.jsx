import { ShieldCheck, Landmark, Share2, MapPinned, UserCheck } from "lucide-react";
import { heroStats } from "../../data/heroStats.js";

const icons = { ShieldCheck, Landmark, Share2, MapPinned, UserCheck };

export default function StatsStrip() {
  return (
    <div className="grid animate-fade-up grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border opacity-0 [animation-delay:340ms] sm:grid-cols-3 lg:grid-cols-5">
      {heroStats.map(({ id, value, label, icon }) => {
        const Icon = icons[icon];
        return (
          <div
            key={id}
            className="flex items-center gap-3 bg-background-card px-5 py-4 transition-colors duration-200 hover:bg-background-elevated lg:py-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background-elevated text-accent">
              <Icon size={16} strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">{value}</p>
              <p className="text-xs text-ink-faint">{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
