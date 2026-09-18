import Hero from "../components/home/Hero.jsx";
import StatsStrip from "../components/home/StatsStrip.jsx";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-visible lg:h-full lg:overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-4 px-6 py-3 lg:h-full lg:min-h-0 lg:px-10">
        <Hero />
        <StatsStrip />
      </div>
    </div>
  );
}
