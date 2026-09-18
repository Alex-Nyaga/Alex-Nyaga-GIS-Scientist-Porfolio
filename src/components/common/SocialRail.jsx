import { Linkedin, Github, Mail } from "lucide-react";
import { socialLinks } from "../../data/social.js";

const icons = { Linkedin, Github, Mail };

/**
 * Vertical (or horizontal) row of social icon links.
 * `orientation` controls the flex direction; used vertically in the
 * Home hero rail and can be reused horizontally elsewhere (e.g. footer).
 */
export default function SocialRail({ orientation = "vertical", className = "" }) {
  const dir = orientation === "vertical" ? "flex-col" : "flex-row";

  return (
    <div className={`flex ${dir} items-center gap-3 ${className}`}>
      {socialLinks.map(({ id, label, icon, href }) => {
        const Icon = icons[icon];
        return (
          <a
            key={id}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-ink-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <Icon size={16} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
