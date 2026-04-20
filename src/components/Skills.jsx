export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">

        <div className="reveal">
          <div className="section-label">TECHNICAL SKILLS</div>
          <h2 className="section-title">Tools of the<br />trade</h2>
        </div>

        <div className="skills-categories reveal">

          {/* AI */}
          <div className="skill-cat">
            <div className="cat-icon">🧠</div>
            <div className="cat-name">AI / LLM</div>
            <div className="skill-tags">
              <span className="skill-tag hot">LangChain</span>
              <span className="skill-tag hot">LangGraph</span>
              <span className="skill-tag hot">ReAct Agents</span>
              <span className="skill-tag hot">Multi-Agent</span>
              <span className="skill-tag">Groq LLaMA</span>
              <span className="skill-tag">Gemini API</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">LCEL</span>
              <span className="skill-tag">Pydantic</span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-cat">
            <div className="cat-icon">⚙️</div>
            <div className="cat-name">BACKEND</div>
            <div className="skill-tags">
              <span className="skill-tag hot">Python</span>
              <span className="skill-tag hot">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">JWT Auth</span>
              <span className="skill-tag">WebSockets</span>
            </div>
          </div>

          {/* FRONTEND */}
          <div className="skill-cat">
            <div className="cat-icon">🎨</div>
            <div className="cat-name">FRONTEND</div>
            <div className="skill-tags">
              <span className="skill-tag hot">React.js</span>
              <span className="skill-tag">Redux Toolkit</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">JavaScript ES6+</span>
              <span className="skill-tag">HTML5 / CSS3</span>
            </div>
          </div>

          {/* DATABASE */}
          <div className="skill-cat">
            <div className="cat-icon">🗄️</div>
            <div className="cat-name">DATABASES & TOOLS</div>
            <div className="skill-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">SQLite</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Vercel</span>
            </div>
          </div>

          {/* CORE */}
          <div className="skill-cat">
            <div className="cat-icon">🧩</div>
            <div className="cat-name">CORE CONCEPTS</div>
            <div className="skill-tags">
              <span className="skill-tag hot">Agentic AI</span>
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">System Design</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">SDLC</span>
              <span className="skill-tag">API Design</span>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="skill-cat">
            <div className="cat-icon">💻</div>
            <div className="cat-name">LANGUAGES</div>
            <div className="skill-tags">
              <span className="skill-tag hot">Python</span>
              <span className="skill-tag hot">JavaScript</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C++</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}