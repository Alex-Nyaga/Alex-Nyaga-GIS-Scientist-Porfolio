import boatGlobeSrc from "../../assets/svg/boat-globe.svg";

// Static SVG illustration (layered water-depth contours with a small
// kayak) that replaces the old procedural sphere. Rendered plain, with
// no extra glow/tint wrapper -- just the artwork itself, its own baked-in
// blur filter already softens the contour-band edges.
export default function GlobeArt({ className = "" }) {
  return (
    <img
      src={boatGlobeSrc}
      alt=""
      aria-hidden="true"
      className={`animate-boat-drift object-contain ${className}`}
    />
  );
}
