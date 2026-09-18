import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ContourBackground from "../common/ContourBackground.jsx";
import FactTicker from "../home/FactTicker.jsx";
import PointerGlow from "../common/PointerGlow.jsx";

import homeBg from "../../assets/svg/contour-background.svg";
import aboutBg from "../../assets/svg/about-background.svg";
import achievementsBg from "../../assets/svg/achievements-background.svg";
import gisContactBg from "../../assets/svg/gis-contact-background.svg";
import projectsGalleryBg from "../../assets/svg/projects-gallery-background.svg";

// Only content-heavy routes scroll internally. All other routes are fixed
// screens between the navbar and footer.
const SCROLLABLE_PREFIXES = ["/gallery", "/projects", "/facts"];

// Each page gets its own themed background artwork; Home keeps the
// original one. Checked in order — first prefix match wins.
const BACKGROUND_RULES = [
  { prefix: "/about", src: aboutBg },
  { prefix: "/achievements", src: achievementsBg },
  { prefix: "/gis-services", src: gisContactBg },
  { prefix: "/contact", src: gisContactBg },
  { prefix: "/facts", src: achievementsBg },
  { prefix: "/projects", src: projectsGalleryBg },
  { prefix: "/gallery", src: projectsGalleryBg },
];

function backgroundFor(pathname) {
  if (pathname === "/") return homeBg;
  const rule = BACKGROUND_RULES.find((r) => pathname.startsWith(r.prefix));
  return rule ? rule.src : homeBg;
}

/**
 * App shell rendered around every route.
 * - The contour/watermark background is mounted once here, fixed to the
 *   viewport, so it never moves/scrolls no matter what the page does —
 *   only its *image* changes per page (Home keeps its original art; each
 *   other page gets its own themed piece).
 * - Navbar and Footer live outside the scroll container, so they stay
 *   put even on the pages that do scroll.
 * - The content area between them is a static, non-scrolling screen by
 *   default; only Gallery and Projects (incl. project detail) opt into
 *   internal scrolling.
 */
export default function PageWrapper({ children }) {
  const { pathname } = useLocation();
  const scrollable = SCROLLABLE_PREFIXES.some((p) => pathname.startsWith(p));
  const isHome = pathname === "/";
  const bgSrc = backgroundFor(pathname);

  // Home, About, GIS Services, Achievements, and Contact are fixed single
  // screens on large viewports (where everything fits side by side), but
  // on phones/tablets that same content stacks taller than the viewport,
  // so those pages need to scroll there rather than clip.
  // Fixed desktop screens become vertically scrollable when their content
  // stacks on smaller screens, preventing sections from being clipped.
  const overflowClass = scrollable ? "overflow-y-auto" : "overflow-y-auto lg:overflow-hidden";

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-background text-ink">
      <PointerGlow />
      <ContourBackground key={bgSrc} src={bgSrc} className="fixed inset-0 z-0" />

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <main className={`min-h-0 flex-1 ${overflowClass}`}>
          {children}
        </main>
        {pathname !== "/facts" && <FactTicker />}
        <Footer />
      </div>
    </div>
  );
}
