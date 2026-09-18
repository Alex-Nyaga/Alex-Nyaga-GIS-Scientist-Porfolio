import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SocialRail from "../components/common/SocialRail.jsx";
import KenyaSatelliteMap from "../components/common/KenyaSatelliteMap.jsx";

const contactInfo = [
  { id: "email", icon: Mail, label: "Email", value: "kariukinyaga202@gmail.com" },
  { id: "phone", icon: Phone, label: "Phone", value: "Tap to call" },
  { id: "location", icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  { id: "availability", icon: Clock, label: "Availability", value: "Open for opportunities" },
];

// Clickable modes of contact — each opens the right app directly
// (mail client, dialer, or the profile itself).
const contactModes = [
  { id: "email", icon: Mail, label: "Email", sub: "kariukinyaga202@gmail.com", href: "mailto:kariukinyaga202@gmail.com" },
  { id: "phone", icon: Phone, label: "Call", sub: "Tap to reveal number", href: "tel:0757934764" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn", sub: "Open profile", href: "https://www.linkedin.com/in/alex-nyaga202" },
  { id: "github", icon: Github, label: "GitHub", sub: "Open profile", href: "https://github.com/Alex-Nyaga" },
];

const AVAILABILITY_KEY = "availabilityStatus";

export default function Contact() {
  const [available, setAvailable] = useState(true);

  // Owner-controlled status. Stored locally so it survives a reload on
  // this device/browser — see the note under the status card.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(AVAILABILITY_KEY);
      if (stored !== null) setAvailable(stored === "true");
    } catch (e) {
      /* ignore */
    }
  }, []);

  function setStatus(next) {
    setAvailable(next);
    try {
      localStorage.setItem(AVAILABILITY_KEY, String(next));
    } catch (e) {
      /* ignore */
    }
  }

  return (
    <div className="relative h-full overflow-y-auto lg:overflow-hidden">
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_380px_1fr] lg:gap-7">
          {/* Left: heading + info */}
          <div className="animate-fade-up opacity-0 [animation-delay:60ms]">
            <h1 className="font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              Let&rsquo;s Work
              <br />
              Together
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              I&rsquo;m always open to discussing new projects, collaborations or opportunities.
            </p>

            <div className="mt-6 space-y-4">
              {contactInfo.map(({ id, icon: Icon, label, value }) => (
                <div key={id} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background-elevated text-accent">
                    <Icon size={15} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-faint">{label}</p>
                    <p className="text-sm text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <SocialRail orientation="horizontal" className="mt-6" />
          </div>

          {/* Center: direct contact modes */}
          <div className="animate-fade-up rounded-2xl border border-border bg-background-card p-5 opacity-0 [animation-delay:140ms]">
            <h2 className="font-display text-base font-semibold text-ink">Get In Touch</h2>
            <p className="mt-1 text-xs text-ink-faint">
              Tap a channel to reach me directly.
            </p>

            <div className="mt-4 space-y-2.5">
              {contactModes.map(({ id, icon: Icon, label, sub, href }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-lg border border-border-light bg-background-elevated px-3.5 py-2.5 transition-colors duration-200 hover:border-accent/60"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background-card text-accent">
                    <Icon size={15} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ink">{label}</p>
                    <p className="truncate text-xs text-ink-faint">{sub}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Kenya map + availability control */}
          <div className="relative min-h-[200px] animate-fade-up overflow-hidden rounded-2xl border border-border opacity-0 [animation-delay:200ms] lg:min-h-0">
            <KenyaSatelliteMap />

            <div className="pointer-events-none absolute left-3 top-3 z-[1000] rounded-md bg-background/70 px-2 py-1 text-[9px] text-ink-faint backdrop-blur-sm">
              Imagery &copy; Esri, Maxar
            </div>

            <div className="absolute bottom-4 right-4 w-52 rounded-xl border border-border-light bg-background/90 p-3.5 backdrop-blur-sm">
              <p className="text-[11px] text-ink-faint">Current Status</p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${available ? "bg-accent" : "bg-ink-faint"}`} />
                <span className="text-xs font-medium text-ink">
                  {available ? "Available" : "Not Available"}
                </span>
              </div>
              <p className="text-[11px] text-ink-faint">
                {available ? "For new projects" : "Fully booked right now"}
              </p>

              {/* Owner control — flips the status shown above */}
              <div className="mt-2.5 flex overflow-hidden rounded-lg border border-border-light text-[11px]">
                <button
                  type="button"
                  onClick={() => setStatus(true)}
                  className={`flex-1 py-1.5 transition-colors duration-150 ${
                    available ? "bg-accent/15 text-accent" : "text-ink-faint hover:text-ink"
                  }`}
                >
                  Available
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(false)}
                  className={`flex-1 py-1.5 transition-colors duration-150 ${
                    !available ? "bg-background-elevated text-ink" : "text-ink-faint hover:text-ink"
                  }`}
                >
                  Not Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
