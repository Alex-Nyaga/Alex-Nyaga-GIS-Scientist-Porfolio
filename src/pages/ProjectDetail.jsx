import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Clock, MapPin, Wrench, CalendarDays } from "lucide-react";
import MapArt from "../components/common/MapArt.jsx";
import { getProjectBySlug } from "../data/projects.js";

// `image` controls whether this section shows a visual (hero / thumbnails).
// Text-only sections (Problem Statement, Objectives, Methodology, Workflow,
// Technologies Used, Project Navigation) render as text only — no image.
const SECTIONS = [
  { id: "overview", label: "Overview", image: "hero+strip" },
  { id: "problem-statement", label: "Problem Statement", image: null },
  { id: "objectives", label: "Objectives", image: null },
  { id: "study-area", label: "Study Area", image: "single" },
  { id: "methodology", label: "Methodology", image: null },
  { id: "workflow", label: "Workflow", image: null },
  { id: "technologies-used", label: "Technologies Used", image: null },
  { id: "results", label: "Results", image: "single" },
  { id: "project-navigation", label: "Project Navigation", image: null },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeId, setActiveId] = useState("overview");

  if (!project) return <Navigate to="/projects" replace />;

  const activeSection = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];

  return (
    <div className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pt-14">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <h1 className="mt-5 max-w-3xl font-display text-2xl font-semibold text-ink sm:text-3xl">
          {project.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr_260px]">
          {/* Sidebar section nav */}
          <nav className="hidden lg:block">
            <ul className="space-y-1 border-l border-border">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(section.id)}
                    className={`-ml-px block border-l px-4 py-2 text-left text-xs transition-colors duration-200 ${
                      activeId === section.id
                        ? "border-accent text-accent"
                        : "border-transparent text-ink-muted hover:text-ink"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile tab select */}
          <div className="lg:hidden">
            <select
              value={activeId}
              onChange={(e) => setActiveId(e.target.value)}
              className="w-full rounded-lg border border-border-light bg-background-card px-4 py-2.5 text-sm text-ink focus:border-accent/60 focus:outline-none"
            >
              {SECTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Main content — only the active section renders */}
          <div className="min-w-0">
            {activeSection.image === "hero+strip" && (
              <>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                  <MapArt variant={project.art} grid={false} />
                  <span className="absolute left-3 top-3 rounded-md border border-accent/40 bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-accent backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
                      <MapArt variant={(project.art + i + 1) % 8} grid={false} />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <SectionBody section={activeSection} project={project} />
                </div>
              </>
            )}

            {activeSection.image === "single" && (
              <>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                  <MapArt variant={(project.art + 3) % 8} grid={false} />
                </div>
                <div className="mt-6">
                  <SectionBody section={activeSection} project={project} />
                </div>
              </>
            )}

            {activeSection.image === null && <SectionBody section={activeSection} project={project} />}
          </div>

          {/* Info sidebar */}
          <aside className="h-fit space-y-5 rounded-2xl border border-border bg-background-card p-6 lg:sticky lg:top-24">
            <InfoRow icon={Clock} label="Duration" value={project.duration} />
            <InfoRow icon={MapPin} label="Study Area" value={project.studyArea} />
            <InfoRow icon={Wrench} label="Tools" value={project.tools} />
            <InfoRow icon={CalendarDays} label="Year" value={project.year} />

            <div className="space-y-3 pt-2">
              <a
                href={project.liveDemo}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light"
              >
                View Live Demo
                <ExternalLink size={14} />
              </a>
              <a
                href={project.code}
                className="flex items-center justify-center gap-2 rounded-lg border border-border-light px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                View Code
                <Github size={14} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SectionBody({ section, project }) {
  return (
    <div className="scroll-mt-24">
      <h2 className="font-display text-lg font-semibold text-ink">{section.label}</h2>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted">
        <SectionContent id={section.id} project={project} />
      </div>
    </div>
  );
}

function SectionContent({ id, project }) {
  switch (id) {
    case "overview":
      return <p>{project.overview}</p>;
    case "problem-statement":
      return <p>{project.problemStatement}</p>;
    case "objectives":
      return (
        <ul className="space-y-2">
          {project.objectives.map((o) => (
            <li key={o} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {o}
            </li>
          ))}
        </ul>
      );
    case "study-area":
      return <p>{project.studyAreaText}</p>;
    case "methodology":
      return <p>{project.methodology}</p>;
    case "workflow":
      return (
        <ol className="space-y-2">
          {project.workflow.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-background-elevated text-[10px] font-medium text-accent">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      );
    case "technologies-used":
      return (
        <div className="flex flex-wrap gap-2">
          {project.technologiesUsed.map((tech) => (
            <span key={tech} className="rounded-md border border-border-light px-3 py-1.5 text-xs text-ink-muted">
              {tech}
            </span>
          ))}
        </div>
      );
    case "results":
      return <p>{project.results}</p>;
    case "project-navigation":
      return <ProjectNav />;
    default:
      return null;
  }
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background-elevated text-accent">
        <Icon size={15} strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-xs text-ink-faint">{label}</p>
        <p className="text-sm text-ink">{value}</p>
      </div>
    </div>
  );
}

function ProjectNav() {
  return (
    <div className="flex items-center justify-between text-xs">
      <Link to="/projects" className="text-ink-muted transition-colors hover:text-accent">
        {"\u2190"} All Projects
      </Link>
      <Link to="/contact" className="text-ink-muted transition-colors hover:text-accent">
        Discuss a similar project {"\u2192"}
      </Link>
    </div>
  );
}
