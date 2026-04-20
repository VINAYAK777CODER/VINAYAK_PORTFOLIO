export default function Timeline() {
  return (
    <section id="journey">
      <div className="reveal">
        <div className="section-label">JOURNEY</div>
        <h2 className="section-title">Timeline</h2>
      </div>

      <div className="timeline reveal">

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024 — PRESENT</div>
          <div className="timeline-title">AI & LLM Systems Engineer</div>
          <div className="timeline-org">Self-directed Projects</div>
          <div className="timeline-desc">
            Building production-grade AI systems with LangChain, LangGraph, and multi-agent architectures.
            Exploring ReAct agents, structured output pipelines, and autonomous research automation.
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023 — 2024</div>
          <div className="timeline-title">Full Stack Developer</div>
          <div className="timeline-org">DevTinder · Netflix-Gemini</div>
          <div className="timeline-desc">
            Built and deployed scalable full-stack applications using React.js, Node.js, MongoDB, and Firebase.
            Integrated AI APIs (Gemini) for intelligent recommendation systems.
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022 — PRESENT</div>
          <div className="timeline-title">B.Tech — Computer Science & Engineering</div>
          <div className="timeline-org">ABES Engineering College, Ghaziabad</div>
          <div className="timeline-desc">
            Pursuing core CS fundamentals alongside hands-on projects. CGPA: 7.81 / 10.0.
            Active in competitive programming on LeetCode and CodeChef.
          </div>
        </div>

      </div>
    </section>
  );
}