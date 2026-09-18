import { useState } from "react";
import {
  User, Route, GraduationCap, BadgeCheck, Cpu, Wrench, FileText,
  MapPin, Mail, Clock, Globe, Download,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader.jsx";
import Button from "../components/common/Button.jsx";
import earthGlobe from "../assets/images/earth-globe.png";
import {
  aboutTabs, quickInfo, skillTags, journey, education,
  certifications, technicalSkills, softwareTools,
} from "../data/about.js";

const tabIcons = { User, Route, GraduationCap, BadgeCheck, Cpu, Wrench, FileText };
const infoIcons = { MapPin, Mail, Clock, Globe };

export default function About() {
  const [active, setActive] = useState("biography");

  return (
    <div className="relative h-full overflow-y-auto lg:overflow-hidden">
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 py-6 lg:px-10">
        <PageHeader title="About Me" />

        <div className="mt-5 grid grid-cols-1 gap-6 lg:min-h-0 lg:flex-1 lg:grid-cols-[210px_1fr]">
          {/* Sidebar tabs */}
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {aboutTabs.map(({ id, label, icon }) => {
              const Icon = tabIcons[icon];
              const isActive = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-lg px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-ink-muted hover:bg-background-card hover:text-ink"
                  }`}
                >
                  <Icon size={15} strokeWidth={1.75} />
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Main panel */}
          <div className="min-h-[420px] rounded-2xl border border-border bg-background-card p-5 sm:p-6 lg:min-h-0 lg:overflow-hidden">
            {active === "biography" && <Biography />}
            {active === "journey" && <Journey />}
            {active === "education" && <Education />}
            {active === "certifications" && <Certifications />}
            {active === "technical-skills" && <TechnicalSkills />}
            {active === "software-tools" && <SoftwareTools />}
            {active === "resume" && <Resume />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Biography() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_220px]">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">
          Hello! I&rsquo;m <span className="text-accent">Alex Nyaga</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          A passionate Geospatial Scientist dedicated to harnessing the power of
          geospatial technologies to solve real-world problems.
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
          My work combines spatial analysis, remote sensing, machine learning, and programming to
          deliver data-driven solutions for environmental, infrastructural, and societal challenges.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickInfo.map(({ id, icon, label, value }) => {
            const Icon = infoIcons[icon];
            return (
              <div key={id} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background-elevated text-accent">
                  <Icon size={14} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[11px] text-ink-faint">{label}</p>
                  <p className="text-sm text-ink">{value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Button href="/resume.pdf" download="" variant="primary" className="mt-5">
          Download CV
          <Download size={15} />
        </Button>

        <div className="mt-5 flex flex-wrap gap-2">
          {skillTags.map((tag) => (
            <span key={tag} className="rounded-lg border border-border-light px-3.5 py-1.5 text-xs text-ink-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-2xl border border-border-light bg-gradient-to-br from-background-elevated to-background-surface">
        <img
          src={earthGlobe}
          alt="Earth viewed from space"
          className="h-full w-full object-cover opacity-75 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-accent/10" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.15em] text-ink-faint">
          Alex Nyaga
        </span>
        <div className="absolute right-3 top-3 grid grid-cols-3 gap-1.5 opacity-60">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-accent" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Journey() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">My Journey</h2>
      <ol className="mt-4 space-y-3 border-l border-border pl-5">
        {journey.map((step) => (
          <li key={step.year} className="relative">
            <span className="absolute -left-[23px] top-1 h-2 w-2 rounded-full border-2 border-background-card bg-accent" />
            <p className="text-[11px] font-medium uppercase tracking-wide text-accent">{step.year}</p>
            <p className="mt-0.5 text-sm font-medium leading-snug text-ink">{step.title}</p>
            <p className="mt-0.5 text-xs leading-snug text-ink-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Education</h2>
      <div className="mt-4 space-y-3">
        {education.map((e) => (
          <div key={e.id} className="rounded-xl border border-border-light bg-background-elevated p-4">
            <p className="font-display text-sm font-semibold text-ink">{e.degree}</p>
            <p className="mt-0.5 text-sm text-accent">{e.school}</p>
            <p className="mt-0.5 text-xs text-ink-faint">{e.period}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Certifications</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certifications.map((c) => (
          <div key={c.id} className="flex items-center gap-3 rounded-xl border border-border-light bg-background-elevated p-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background-card text-accent">
              <BadgeCheck size={16} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{c.title}</p>
              <p className="text-xs text-ink-faint">{c.org} &middot; {c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalSkills() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Technical Skills</h2>
      <div className="mt-4 space-y-3.5">
        {technicalSkills.map((s) => (
          <div key={s.id}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink">{s.label}</span>
              <span className="text-ink-faint">{s.value}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background-elevated">
              <div className="h-full rounded-full bg-accent" style={{ width: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SoftwareTools() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Software &amp; Tools</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {softwareTools.map((tool) => (
          <span key={tool} className="rounded-lg border border-border-light bg-background-elevated px-3.5 py-2 text-xs text-ink-muted">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Resume</h2>
      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-muted">
        Download a full copy of my resume for a detailed look at my experience, education and
        technical skill set.
      </p>
      <Button href="/resume.pdf" download="" variant="primary" className="mt-6">
        Download Resume
        <Download size={15} />
      </Button>
    </div>
  );
}
