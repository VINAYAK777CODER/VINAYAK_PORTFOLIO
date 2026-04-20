export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">

        <div className="reveal">
          <div className="section-label">TECHNICAL SKILLS</div>
          <h2 className="section-title">Tools of the<br />trade</h2>
        </div>

        <div className="skills-categories reveal">

          <div className="skill-cat">
            <div className="cat-icon">🧠</div>
            <div className="cat-name">AI / LLM</div>
            <div className="skill-tags">
              <span className="skill-tag hot">LangChain</span>
              <span className="skill-tag hot">LangGraph</span>
              <span className="skill-tag">ReAct Agents</span>
            </div>
          </div>

          <div className="skill-cat">
            <div className="cat-icon">⚙️</div>
            <div className="cat-name">BACKEND</div>
            <div className="skill-tags">
              <span className="skill-tag hot">Python</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}