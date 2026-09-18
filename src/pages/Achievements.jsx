import { useMemo, useState } from "react";
import { Trophy, BadgeCheck, Medal, Rocket, Users, Star, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/common/PageHeader.jsx";
import FilterTabs from "../components/common/FilterTabs.jsx";
import { achievementCategories, achievements } from "../data/achievements.js";

const categoryIcons = {
  Awards: Trophy,
  Certifications: BadgeCheck,
  Competitions: Medal,
  Hackathons: Rocket,
  Leadership: Users,
  Recognition: Star,
};

export default function Achievements() {
  const [active, setActive] = useState("Awards");

  const filtered = useMemo(
    () => achievements.filter((a) => a.category === active),
    [active]
  );

  return (
    <div className="relative min-h-full overflow-visible lg:h-full lg:overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-full max-w-7xl flex-col justify-center px-6 py-6 lg:h-full lg:min-h-0 lg:px-10">
        <PageHeader title="Achievements" subtitle="Milestones, awards and recognitions." />

        <div className="mt-6">
          <FilterTabs
            items={achievementCategories}
            active={active}
            onChange={setActive}
            icons={categoryIcons}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => {
            const Icon = categoryIcons[item.category] ?? Trophy;
            const goldTile = item.type === "trophy";
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border bg-background-card transition-colors duration-200 hover:border-accent/40"
              >
                <div
                  className={`flex aspect-[16/10] items-center justify-center ${
                    goldTile
                      ? "bg-gradient-to-br from-[#3a2a10] via-[#8a5a15] to-[#1a1206]"
                      : "bg-gradient-to-br from-[#0e2a3a] via-[#156b8a] to-[#04070c]"
                  }`}
                >
                  <Icon size={32} strokeWidth={1.5} className={goldTile ? "text-[#e8c27a]" : "text-[#5eeaa8]"} />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs text-ink-faint">
                    {item.org} &middot; {item.year}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-ink-faint">Nothing in this category yet.</p>
        )}

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-6 py-2.5 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/10"
          >
            View All Achievements
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
