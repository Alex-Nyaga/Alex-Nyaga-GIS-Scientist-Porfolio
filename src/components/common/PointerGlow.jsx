import { useEffect, useRef } from "react";

export default function PointerGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    function moveGlow(event) {
      glow.style.transform = `translate3d(${event.clientX - 42}px, ${event.clientY - 42}px, 0)`;
      glow.style.opacity = "1";
    }

    function hideGlow() {
      glow.style.opacity = "0";
    }

    window.addEventListener("pointermove", moveGlow, { passive: true });
    window.addEventListener("pointerleave", hideGlow);
    return () => {
      window.removeEventListener("pointermove", moveGlow);
      window.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return (
    <span
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[84px] w-[84px] rounded-full bg-accent/8 opacity-0 blur-xl transition-opacity duration-500"
    />
  );
}
