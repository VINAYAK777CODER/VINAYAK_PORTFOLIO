import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function animate() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;

      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
    </>
  );
}