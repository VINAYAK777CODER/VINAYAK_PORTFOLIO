import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    const trailContainer = document.getElementById("cursor-trail");

    let mx = 0, my = 0, rx = 0, ry = 0;
    let trail = [];
    const TRAIL_LENGTH = 8;

    // Create trail dots
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const dot = document.createElement("div");
      dot.className = "cursor-trail-dot";
      dot.style.opacity = (1 - i / TRAIL_LENGTH) * 0.5;
      dot.style.transform = `scale(${1 - i * 0.1})`;
      trailContainer.appendChild(dot);
      trail.push({ el: dot, x: 0, y: 0 });
    }

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    // Detect interactive elements for cursor morph
    document.addEventListener("mouseover", (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive = tag === "a" || tag === "button" || e.target.closest("a") || e.target.closest("button");
      if (isInteractive) {
        cursor.classList.add("cursor--hover");
        ring.classList.add("ring--hover");
      }
    });
    document.addEventListener("mouseout", (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive = tag === "a" || tag === "button" || e.target.closest("a") || e.target.closest("button");
      if (isInteractive) {
        cursor.classList.remove("cursor--hover");
        ring.classList.remove("ring--hover");
      }
    });

    document.addEventListener("mousedown", () => {
      cursor.classList.add("cursor--click");
      ring.classList.add("ring--click");
    });
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("cursor--click");
      ring.classList.remove("ring--click");
    });

    let prevPositions = Array(TRAIL_LENGTH).fill({ x: 0, y: 0 });

    function animate() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;

      // Update trail
      prevPositions = [{ x: mx, y: my }, ...prevPositions.slice(0, TRAIL_LENGTH - 1)];
      trail.forEach((t, i) => {
        const pos = prevPositions[i] || { x: mx, y: my };
        t.el.style.transform = `translate(${pos.x - 3}px, ${pos.y - 3}px) scale(${1 - i * 0.09})`;
      });

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div id="cursor-trail"></div>
    </>
  );
}