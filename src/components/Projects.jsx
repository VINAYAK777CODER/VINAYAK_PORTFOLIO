import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { name: "LLM SQL Generator", cat: "ai", link: "https://github.com/VINAYAK777CODER/Langchain-Project" },
    { name: "Multi-Agent Research", cat: "ai", link: "https://github.com/VINAYAK777CODER/multi_agent_ai_research_system" },
    { name: "DevTinder", cat: "full", link: "https://github.com/VINAYAK777CODER/DEVTINDER" },
    { name: "Netflix-Gemini", cat: "ai full", link: "https://github.com/VINAYAK777CODER/netflix-gemini" },
  ];

  const filtered = projects.filter(p =>
    filter === "all" ? true : p.cat.includes(filter)
  );

  return (
    <section id="projects">
      <div className="filter-bar">
        {["all", "ai", "full"].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <a href={p.link} target="_blank">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}