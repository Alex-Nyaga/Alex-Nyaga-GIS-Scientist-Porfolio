import defaultContourSrc from "../../assets/svg/contour-background.svg";

/**
 * Faint topographic contour-line backdrop shared across pages.
 * Absolutely positioned, non-interactive — sits behind page content.
 * Accepts a `src` so different pages can use their own themed artwork
 * while keeping the same treatment (grid + line/shape watermark).
 */
export default function ContourBackground({ className = "", src }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <img
        src={src || defaultContourSrc}
        alt=""
        className="contour-layer h-full w-full object-cover opacity-[0.07]"
      />
    </div>
  );
}
