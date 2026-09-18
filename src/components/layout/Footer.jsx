import { Link } from "react-router-dom";
import SocialRail from "../common/SocialRail.jsx";
import Logo from "../../assets/svg/Logo.svg";

export default function Footer() {
  return (
    <footer className="relative shrink-0 border-t border-border/70 bg-background-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Alex Nyaga logo" className="h-8 w-auto" />
          <div>
            <p className="font-display text-sm font-semibold text-ink">Alex Nyaga</p>
            <p className="text-xs text-ink-faint">GIS Scientist</p>
          </div>
        </Link>

        <SocialRail orientation="horizontal" />
      </div>
    </footer>
  );
}
