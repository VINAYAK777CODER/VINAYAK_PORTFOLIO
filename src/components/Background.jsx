import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H, particles = [];
    let mouse = { x: -9999, y: -9999 };
    const CONNECT_DIST = 130;
    const MOUSE_REPEL = 120;
    const COUNT = 110;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : (Math.random() > 0.5 ? -10 : H + 10);
        this.ox = this.x; this.oy = this.y;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.6 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.baseAlpha = this.alpha;
        const rng = Math.random();
        this.color = rng > 0.72 ? "#ff6b2b" : rng > 0.48 ? "#00ffc8" : rng > 0.3 ? "#00bfff" : "#ffffff";
      }
      update() {
        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          this.x += (dx / dist) * force * 2.2;
          this.y += (dy / dist) * force * 2.2;
          this.alpha = Math.min(1, this.baseAlpha + force * 0.6);
        } else {
          // Drift back to natural position
          this.x += (this.ox - this.x) * 0.012 + this.vx;
          this.y += (this.oy - this.y) * 0.012 + this.vy;
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
        }
        this.ox += this.vx * 0.6;
        this.oy += this.vy * 0.6;
        if (this.ox < 0) this.ox = W; if (this.ox > W) this.ox = 0;
        if (this.oy < 0) this.oy = H; if (this.oy > H) this.oy = 0;
        this.x = Math.max(0, Math.min(W, this.x));
        this.y = Math.max(0, Math.min(H, this.y));
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        // Glow for colored particles
        if (this.color !== "#ffffff") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r * 3, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 3);
          g.addColorStop(0, this.color + "44");
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.globalAlpha = this.alpha * 0.3;
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.18;
            // Highlight connections near mouse
            const mdx = (particles[i].x + particles[j].x) / 2 - mouse.x;
            const mdy = (particles[i].y + particles[j].y) / 2 - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            const boost = mdist < 200 ? (1 - mdist / 200) * 0.5 : 0;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,107,43,${opacity + boost})`;
            ctx.globalAlpha = 1;
            ctx.lineWidth = 0.5 + boost;
            ctx.stroke();
          }
        }
      }
    }

    // Scanning line effect
    let scanY = 0;
    function drawScanLine() {
      scanY = (scanY + 0.4) % H;
      const grad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 2);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(1, "rgba(0,255,200,0.015)");
      ctx.fillStyle = grad;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, scanY - 60, W, 62);
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawScanLine();
      drawConnections();
      particles.forEach((p) => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}