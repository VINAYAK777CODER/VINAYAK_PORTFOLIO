export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-label">ABOUT ME</div>
        <h2 className="section-title">
          The engineer<br />behind the code
        </h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm <strong>Vinayak</strong>, a Python-focused Software Engineer
            passionate about the intersection of <strong>Artificial Intelligence and scalable systems</strong>.
          </p>

          <p>
            From crafting <strong>multi-agent autonomous research pipelines</strong>
            to building full-stack platforms — I bring end-to-end ownership.
          </p>

          <p>
            Currently pursuing <strong>B.Tech in Computer Science</strong> at ABES Engineering College.
          </p>

          <div className="hero-btns" style={{ marginTop: "32px" }}>
            <a href="https://github.com/VINAYAK777CODER" target="_blank" className="btn-ghost">GitHub ↗</a>
            <a href="https://linkedin.com/in/vinayak-a18869258" target="_blank" className="btn-ghost">LinkedIn ↗</a>
          </div>
        </div>

        <div className="about-terminal">
          <div className="terminal-bar">
            <div className="dot r"></div>
            <div className="dot y"></div>
            <div className="dot g"></div>
            <span className="terminal-title">vinayak@dev ~ zsh</span>
          </div>

          <div className="terminal-body">
            <div><span className="t-prompt">➜</span> <span className="t-cmd">cat about.json</span></div>
            <div className="t-out">{`{`}</div>
            <div className="t-out">"name": "Vinayak",</div>
            <div className="t-out">"role": "AI Engineer + Full Stack",</div>
            <div className="t-out">"status": "🟢 Open to Work"</div>
            <div className="t-out">{`}`}</div>
          </div>
        </div>
      </div>
    </section>
  );
}