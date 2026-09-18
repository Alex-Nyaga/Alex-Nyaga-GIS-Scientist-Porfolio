import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../../data/navLinks.js";
import Logo from "../../assets/svg/Logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && !document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {
      /* ignore (e.g. privacy mode) */
    }
  }, [dark]);

  const linkClasses = ({ isActive }) =>
    `relative text-sm transition-colors duration-200 ${
      isActive
        ? "text-accent"
        : "text-ink-muted hover:text-ink"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-200 ${
      isActive ? "after:w-full" : "after:w-0"
    }`;

  return (
    <header className="z-20 shrink-0 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Alex Nyaga logo" className="h-8 w-auto" />
          <span className="font-display text-sm font-semibold tracking-wide text-ink">
            ALEX NYAGA
          </span>
        </NavLink>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            aria-pressed={dark}
            className="hidden items-center rounded-full border border-border-light bg-background-surface p-0.5 sm:flex"
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                !dark ? "bg-ink text-background" : "text-ink-faint"
              }`}
            >
              <Sun size={13} strokeWidth={1.75} />
            </span>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                dark ? "bg-ink text-background" : "text-ink-faint"
              }`}
            >
              <Moon size={13} strokeWidth={1.75} />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-ink lg:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-accent" : "text-ink-muted"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
