import { useState, useRef } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { 
      name: "LLM SQL Generator", 
      cat: "ai", 
      desc: "Creates SQL from natural language prompts.",
      link: "https://github.com/VINAYAK777CODER/Langchain-Project",
      typeLabel: "AI / LLM",
      typeClass: "ai"
    },
    { 
      name: "Multi-Agent Research", 
      cat: "ai", 
      desc: "Autonomous AI system for web research.",
      link: "https://github.com/VINAYAK777CODER/multi_agent_ai_research_system",
      typeLabel: "AI Agent",
      typeClass: "ai"
    },
    { 
      name: "DevTinder", 
      cat: "full", 
      desc: "Full stack dating app for developers.",
      link: "https://github.com/VINAYAK777CODER/DEVTINDER",
      typeLabel: "Full Stack",
      typeClass: "full"
    },
    { 
      name: "Netflix-Gemini", 
      cat: "ai full", 
      desc: "Netflix clone with AI movie recommendations.",
      link: "https://github.com/VINAYAK777CODER/netflix-gemini",
      typeLabel: "AI + Full Stack",
      typeClass: "ai"
    },
  ];

  const filtered = projects.filter(p =>
    filter === "all" ? true : p.cat.includes(filter)
  );

  // 3D Tilt
  function handleMouseMove(e, cardEl) {
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardEl.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.02)`;
    // Move glow with mouse
    const glowX = (x + 0.5) * 100;
    const glowY = (y + 0.5) * 100;
    cardEl.style.setProperty("--glow-x", `${glowX}%`);
    cardEl.style.setProperty("--glow-y", `${glowY}%`);
  }
  function handleMouseLeave(cardEl) {
    cardEl.style.transform = "";
    cardEl.style.removeProperty("--glow-x");
    cardEl.style.removeProperty("--glow-y");
  }

  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label">WORK</div>
        <h2 className="section-title">Selected<br />Projects</h2>
      </div>

      <div className="filter-bar reveal">
        {["all", "ai", "full"].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All Projects" : f === "ai" ? "AI/LLM" : "Full Stack"}
          </button>
        ))}
      </div>

      <div className="projects-grid reveal">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="project-card"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="project-card-glow" />
            <div className="project-header">
              <span className="project-icon">📂</span>
              <span className={`project-type ${p.typeClass}`}>{p.typeLabel}</span>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer" className="proj-link gh">
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}