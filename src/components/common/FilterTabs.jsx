export default function FilterTabs({ items, active, onChange, icons }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const key = typeof item === "string" ? item : item.key;
        const Icon = icons?.[key];
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
              isActive
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-border-light text-ink-muted hover:border-accent/40 hover:text-ink"
            }`}
          >
            {Icon && <Icon size={14} strokeWidth={1.75} />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
