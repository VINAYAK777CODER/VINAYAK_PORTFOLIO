import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact">
      <div className="contact-inner">

        <div className="reveal">
          <div className="section-label">CONTACT</div>
          <h2 className="section-title">Let's build<br />something</h2>
        </div>

        <div className="contact-grid reveal">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <p>
              Whether you're looking for an AI engineer, a full stack collaborator,
              or just want to geek out about LLMs — my inbox is always open.
            </p>

            <div className="contact-links">

              <a href="mailto:4517vinayak12a1@gmail.com" className="contact-link">
                <div className="contact-link-icon">✉</div>
                <div className="contact-link-info">
                  <small>EMAIL</small>
                  <span>4517vinayak12a1@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/VINAYAK777CODER" target="_blank" className="contact-link">
                <div className="contact-link-icon">⬡</div>
                <div className="contact-link-info">
                  <small>GITHUB</small>
                  <span>VINAYAK777CODER</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/vinayak-a18869258" target="_blank" className="contact-link">
                <div className="contact-link-icon">in</div>
                <div className="contact-link-info">
                  <small>LINKEDIN</small>
                  <span>vinayak-a18869258</span>
                </div>
              </a>

              <a href="https://leetcode.com/VINAYAK777CODER" target="_blank" className="contact-link">
                <div className="contact-link-icon">⚡</div>
                <div className="contact-link-info">
                  <small>LEETCODE</small>
                  <span>VINAYAK777CODER</span>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">

            <div className="form-group">
              <label className="form-label">YOUR NAME</label>
              <input className="form-input" type="text" placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label className="form-label">YOUR EMAIL</label>
              <input className="form-input" type="email" placeholder="john@company.com" />
            </div>

            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <textarea className="form-input" rows="5" placeholder="Hey Vinayak, I'd love to collaborate on..." />
            </div>

            <button className="form-submit" onClick={handleSubmit}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}