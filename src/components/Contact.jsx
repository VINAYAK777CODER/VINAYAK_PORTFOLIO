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

          <div className="contact-info">
            <p>My inbox is always open.</p>

            <a href="mailto:4517vinayak12a1@gmail.com" className="contact-link">
              Email
            </a>
          </div>

          <div className="contact-form">
            <input className="form-input" placeholder="Your Name" />
            <input className="form-input" placeholder="Email" />
            <textarea className="form-input" rows="5" />

            <button className="form-submit" onClick={handleSubmit}>
              {sent ? "✓ Sent!" : "Send Message →"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}