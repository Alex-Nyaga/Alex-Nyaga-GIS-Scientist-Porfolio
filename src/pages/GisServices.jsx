import {
  Hexagon,
  Satellite,
  Database,
  Map,
  BrainCircuit,
  Terminal,
  Wand2,
  UserRound,
  GraduationCap,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader.jsx";
import { services } from "../data/services.js";

const icons = {
  Hexagon,
  Satellite,
  Database,
  Map,
  BrainCircuit,
  Terminal,
  Wand2,
  UserRound,
  GraduationCap,
};

export default function GisServices() {
  return (
    <div className="relative min-h-full overflow-visible lg:h-full lg:overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-full max-w-7xl flex-col justify-center px-6 py-6 lg:h-full lg:min-h-0 lg:px-10">
        <PageHeader title="GIS Services" subtitle="Professional geospatial solutions tailored to your needs." />

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, icon, title, description }, i) => {
            const Icon = icons[icon];
            return (
              <div
                key={id}
                className="animate-fade-up rounded-2xl border border-border bg-background-card p-5 opacity-0 transition-colors duration-200 hover:border-accent/40 hover:bg-background-elevated"
                style={{ animationDelay: `${80 * i}ms` }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background-elevated text-accent">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
