import { lazy, Suspense } from "react";
import HeroContent from "./HeroContent";

const HeroScene = lazy(() => import("./HeroScene"));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <Suspense fallback={<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(37,99,235,0.12),transparent_38%)]" />}>
        <HeroScene />
      </Suspense>

      <HeroContent />

      <div className="absolute bottom-5 left-[6vw] z-20 flex items-center gap-4 pb-1 text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:bottom-8">
        <span className="h-px w-12 bg-neutral-700" />
        Scroll to explore
      </div>
    </section>
  );
}
