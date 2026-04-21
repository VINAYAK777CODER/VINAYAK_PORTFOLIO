import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [done, setDone] = useState(false);
  const canvasRef = useRef();

  const phases = [
    { text: "INITIALIZING_PORTFOLIO.exe", color: "#ff6b2b" },
    { text: "LOADING AI MODULES...", color: "#00ffc8" },
    { text: "COMPILING LANGGRAPH...", color: "#00bfff" },
    { text: "BOOTING AGENTS...", color: "#ff6b2b" },
    { text: "SYSTEM READY ✓", color: "#00ffc8" },
  ];

  const [displayText, setDisplayText] = useState("");
  const textRef = useRef("");

  // Text scramble effect
  function scrambleText(target, cb) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*_";
    let iteration = 0;
    const maxIter = target.length * 2;
    const interval = setInterval(() => {
      const scrambled = target
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";
          if (idx < iteration / 2) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      textRef.current = scrambled;
      setDisplayText(scrambled);
      iteration++;
      if (iteration > maxIter) {
        clearInterval(interval);
        textRef.current = target;
        setDisplayText(target);
        if (cb) cb();
      }
    }, 28);
  }

  useEffect(() => {
    // Matrix rain canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 18);
    const drops = Array(cols).fill(1);
    const matrixChars = "01アイウエオカキクケコLANGCHAINAGENT";

    const matrixInterval = setInterval(() => {
      ctx.fillStyle = "rgba(8,10,15,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,255,200,0.12)";
      ctx.font = "13px JetBrains Mono, monospace";
      drops.forEach((y, i) => {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 45);

    // Progress animation
    let prog = 0;
    let curPhase = 0;
    scrambleText(phases[0].text);

    const progressInterval = setInterval(() => {
      prog += Math.random() * 3 + 0.5;
      if (prog > 100) prog = 100;
      setProgress(Math.floor(prog));

      // Phase transitions
      const newPhase = Math.floor((prog / 100) * (phases.length - 1));
      if (newPhase !== curPhase) {
        curPhase = newPhase;
        setPhase(curPhase);
        scrambleText(phases[curPhase].text);
      }

      // Random glitch
      if (Math.random() > 0.96) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 80);
      }

      if (prog >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setDone(true);
          const el = document.getElementById("loader");
          if (el) el.classList.add("hide");
        }, 600);
      }
    }, 28);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div id="loader" className={done ? "hide" : ""}>
      <canvas ref={canvasRef} className="loader-matrix" />

      <div className={`loader-content ${glitch ? "glitching" : ""}`}>
        {/* Top scanline decoration */}
        <div className="loader-scanlines" />

        <div className="loader-logo">
          <span className="loader-logo-v">V</span>
          <span className="loader-logo-dot">.</span>
          <span className="loader-logo-name">INAYAK</span>
        </div>

        <div className="loader-phase-text" style={{ color: phases[phase].color }}>
          {displayText}
          <span className="loader-cursor">█</span>
        </div>

        <div className="loader-bar-wrap">
          <div className="loader-bar">
            <div
              className="loader-bar-fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="loader-bar-glow"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="loader-percent">{String(progress).padStart(3, "0")}%</div>
        </div>

        <div className="loader-bottom-row">
          {["CPU", "MEM", "GPU"].map((label, i) => (
            <div key={label} className="loader-stat">
              <span className="loader-stat-label">{label}</span>
              <div className="loader-stat-bar">
                <div
                  className="loader-stat-fill"
                  style={{
                    width: `${Math.min(100, progress * (0.6 + i * 0.2))}%`,
                    background: i === 0 ? "#ff6b2b" : i === 1 ? "#00ffc8" : "#00bfff",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}