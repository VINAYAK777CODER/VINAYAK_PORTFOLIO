import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Apply directional animation classes based on position/context
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el, idx) => {
      // Determine animation direction based on parent section
      const section = el.closest("section");
      const sectionId = section?.id || "";

      if (el.classList.contains("about-terminal")) {
        el.style.setProperty("--reveal-x", "60px");
        el.style.setProperty("--reveal-y", "0px");
      } else if (el.classList.contains("about-text")) {
        el.style.setProperty("--reveal-x", "-60px");
        el.style.setProperty("--reveal-y", "0px");
      } else if (sectionId === "skills" || sectionId === "achievements") {
        el.style.setProperty("--reveal-x", "0px");
        el.style.setProperty("--reveal-y", "40px");
      } else {
        el.style.setProperty("--reveal-x", "0px");
        el.style.setProperty("--reveal-y", "30px");
      }

      // Stagger children inside grids
      const children = el.querySelectorAll(
        ".skill-cat, .project-card, .ach-card, .contact-link, .timeline-item"
      );
      children.forEach((child, ci) => {
        child.style.transitionDelay = `${ci * 0.08}s`;
        child.classList.add("reveal-child");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Trigger number count-up for achievement numbers
            const nums = entry.target.querySelectorAll(".ach-num");
            nums.forEach((num) => {
              const raw = num.textContent.replace(/[^0-9]/g, "");
              if (!raw) return;
              const target = parseInt(raw, 10);
              const suffix = num.textContent.replace(/[0-9]/g, "");
              let current = 0;
              const step = Math.ceil(target / 60);
              const counter = setInterval(() => {
                current = Math.min(current + step, target);
                num.textContent = current + suffix;
                if (current >= target) clearInterval(counter);
              }, 18);
            });

            // Animate timeline dots
            const dots = entry.target.querySelectorAll(".timeline-dot");
            dots.forEach((dot, i) => {
              setTimeout(() => dot.classList.add("dot-active"), i * 200 + 100);
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}