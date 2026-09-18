import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "../components/common/PageHeader.jsx";
import FilterTabs from "../components/common/FilterTabs.jsx";
import MapArt from "../components/common/MapArt.jsx";
import { galleryCategories, galleryItems } from "../data/gallery.js";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  );

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));

  // Esc / arrow-key navigation while the lightbox is open, and lock page
  // scroll behind it so the backdrop doesn't scroll with it.
  useEffect(() => {
    if (lightboxItem === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxItem]);

  return (
    <div className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-10 lg:pt-16">
        <PageHeader title="Gallery" subtitle="Visual exploration of maps, imagery, and fieldwork." />

        <div className="mt-8">
          <FilterTabs items={galleryCategories} active={active} onChange={setActive} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[160px]">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border text-left ${item.span ?? ""}`}
            >
              <MapArt variant={item.art} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <p className="text-xs font-medium text-ink">{item.title}</p>
                <p className="text-[11px] text-ink-faint">{item.category}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-ink-faint">No items in this category yet.</p>
        )}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-6 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/10"
          >
            View Full Gallery
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-background-card text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent sm:right-6 sm:top-6"
          >
            <X size={18} />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-background-card text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent sm:left-6"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-background-card text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent sm:right-6"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          <div
            className="flex w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
              <MapArt variant={lightboxItem.art} grid={false} />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-ink">{lightboxItem.title}</p>
              <p className="mt-1 text-xs text-ink-faint">{lightboxItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
