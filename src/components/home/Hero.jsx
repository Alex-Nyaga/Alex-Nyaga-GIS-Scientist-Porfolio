import { ArrowUpRight, Download } from "lucide-react";
import Button from "../common/Button.jsx";
import SocialRail from "../common/SocialRail.jsx";
import GlobeArt from "../common/GlobeArt.jsx";

export default function Hero() {
  return (
    <div className="grid min-h-0 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
      {/* Left: icon rail + copy */}
      <div className="flex gap-6 sm:gap-8">
        <div className="hidden shrink-0 pt-2 sm:block">
          <SocialRail />
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:80ms]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <p
              className="animate-slide-in text-xs font-medium uppercase tracking-[0.2em] text-accent"
              style={{ animationDelay: "180ms" }}
            >
              GIS Scientist
            </p>
          </div>

          <h1 className="text-balance font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
            Transforming
            <br />
            <span className="text-accent">Spatial Data</span>
            <br />
            Into Real-World Solutions
          </h1>

          <p className="mt-5 max-w-md text-balance text-[15px] leading-relaxed text-ink-muted">
            I build intelligent geospatial solutions using GIS, Remote Sensing,
            Machine Learning and modern technologies to solve environmental
            and societal challenges.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button to="/projects" variant="primary">
              Explore My Work
              <ArrowUpRight size={16} strokeWidth={2} />
            </Button>
            <Button href="/resume.pdf" variant="outline" download="">
              View Resume
              <Download size={15} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>

      {/* Right: globe visual — contained, sits in its own grid column so it
          can never overlap the text or stats strip at any screen size. */}
      <div className="relative mx-auto flex w-full max-w-sm animate-fade-up items-center justify-center opacity-0 [animation-delay:200ms] lg:max-w-md xl:max-w-lg">
        <GlobeArt className="aspect-square w-full max-w-[280px] lg:max-w-[340px] xl:max-w-[390px]" />
      </div>

    </div>
  );
}
