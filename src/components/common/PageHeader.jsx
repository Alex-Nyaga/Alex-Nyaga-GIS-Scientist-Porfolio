export default function PageHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`animate-fade-up shrink-0 opacity-0 [animation-delay:60ms] ${className}`}>
      <div className="flex items-center gap-3">
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h1>
        <span className="mt-1.5 h-px w-10 self-center bg-accent" aria-hidden="true" />
      </div>
      {subtitle && <p className="mt-2 max-w-xl text-sm text-ink-muted">{subtitle}</p>}
    </div>
  );
}
