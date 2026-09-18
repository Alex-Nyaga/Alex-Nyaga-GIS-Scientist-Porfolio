import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-offset-4";

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-light hover:shadow-glow-sm active:scale-[0.98]",
  outline:
    "border border-border-light text-ink hover:border-accent/60 hover:text-accent active:scale-[0.98]",
};

/**
 * Shared button. Renders a react-router <Link> for internal paths (`to`),
 * a plain <a> for external/mailto links (`href`), or a <button> otherwise.
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
