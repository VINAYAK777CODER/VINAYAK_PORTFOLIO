import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────
//  useMagneticTilt
//  Adds silky 3D perspective tilt to cards on mouse move.
//  Uses RAF + lerp for smoothness. Zero scroll listeners.
//  Zero layout thrashing — only transforms (GPU only).
// ─────────────────────────────────────────────────────────────
export default function useMagneticTilt() {
  useEffect(() => {
    const SELECTORS = ".skill-cat, .project-card, .ach-card";
    const cards = document.querySelectorAll(SELECTORS);

    // Per-card state
    const state = new Map();

    cards.forEach((card) => {
      state.set(card, {
        targetX: 0, targetY: 0,
        currentX: 0, currentY: 0,
        glowX: 50, glowY: 50,
        hover: false,
        raf: null,
      });

      function lerp(a, b, t) { return a + (b - a) * t; }

      function animate(s) {
        s.currentX = lerp(s.currentX, s.targetX, 0.1);
        s.currentY = lerp(s.currentY, s.targetY, 0.1);

        const isMoving = Math.abs(s.currentX - s.targetX) > 0.01 ||
                         Math.abs(s.currentY - s.targetY) > 0.01;

        card.style.transform = `
          perspective(900px)
          rotateX(${s.currentY}deg)
          rotateY(${s.currentX}deg)
          translateZ(${s.hover ? 10 : 0}px)
          scale(${s.hover ? 1.03 : 1})
        `;

        // Dynamic glow follows mouse
        card.style.setProperty(
          "--card-glow",
          `radial-gradient(circle at ${s.glowX}% ${s.glowY}%, rgba(255,107,43,0.14), transparent 65%)`
        );

        if (isMoving || s.hover) {
          s.raf = requestAnimationFrame(() => animate(s));
        }
      }

      card.addEventListener("mouseenter", () => {
        const s = state.get(card);
        s.hover = true;
        s.raf = requestAnimationFrame(() => animate(s));

        // Subtle lift shadow
        card.style.boxShadow = undefined; // let CSS handle it
      });

      card.addEventListener("mousemove", (e) => {
        const s = state.get(card);
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width  / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);

        // Max tilt: 10deg X, 8deg Y
        s.targetX =  dx * 10;
        s.targetY = -dy * 8;

        // Glow position as percentage
        s.glowX = ((e.clientX - rect.left) / rect.width)  * 100;
        s.glowY = ((e.clientY - rect.top)  / rect.height) * 100;

        if (!s.raf) s.raf = requestAnimationFrame(() => animate(s));
      });

      card.addEventListener("mouseleave", () => {
        const s = state.get(card);
        s.hover = false;
        s.targetX = 0;
        s.targetY = 0;
        s.glowX = 50;
        s.glowY = 50;
        // Let lerp smoothly return to flat
        if (!s.raf) s.raf = requestAnimationFrame(() => animate(s));
      });
    });

    return () => {
      cards.forEach((card) => {
        const s = state.get(card);
        if (s?.raf) cancelAnimationFrame(s.raf);
        card.style.transform = "";
      });
    };
  }, []);
}