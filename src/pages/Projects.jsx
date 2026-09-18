import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import PageHeader from "../components/common/PageHeader.jsx";
import MapArt from "../components/common/MapArt.jsx";
import { categories, projects } from "../data/projects.js";

const PAGE_SIZE = 8;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === "All Projects" || p.category === activeCategory;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visibleProjects = filtered.slice(0, visible);

  return (
    <div className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-10 lg:pt-16">
        <PageHeader
          title="Projects"
          subtitle="A collection of my work in GIS, Remote Sensing, Machine Learning and Web Development."
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisible(PAGE_SIZE);
                }}
                className={`rounded-lg border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-border-light text-ink-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-lg border border-border-light bg-background-card px-3.5 py-2.5">
              <Search size={14} className="text-ink-faint" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search projects..."
                className="w-40 bg-transparent text-xs text-ink placeholder:text-ink-faint focus:outline-none sm:w-48"
              />
            </div>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-border-light px-3.5 py-2.5 text-xs text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-background-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <MapArt variant={project.art} className="transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-md border border-accent/40 bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-accent backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-semibold text-ink">{project.shortTitle}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{project.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-ink-faint">{project.year}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-light text-ink-muted transition-colors duration-200 group-hover:border-accent/60 group-hover:text-accent">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-16 text-center text-sm text-ink-faint">No projects match that search.</p>
        )}

        {visible < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-lg border border-accent/40 px-6 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/10"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
