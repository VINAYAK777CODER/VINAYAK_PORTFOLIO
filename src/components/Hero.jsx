import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "LLM Systems Builder",
    "ReAct Agent Designer",
    "Python Specialist",
  ];

  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = roles[i];

      if (!del) {
        setText(current.slice(0, j + 1));
        setJ(j + 1);
        if (j + 1 === current.length) setDel(true);
      } else {
        setText(current.slice(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, del ? 50 : 90);

    return () => clearTimeout(timer);
  }, [j, del, i]);

  return (
    <section id="hero">
      <div className="hero-tag">AVAILABLE FOR OPPORTUNITIES</div>
      <h1 className="hero-name">
        <span className="grad">VINAYAK</span>
      </h1>
      <div className="hero-role">
        <span className="typed">{text}</span>
      </div>

      <p className="hero-tagline">
        Building Intelligent Systems with AI Agents — where language models meet production-grade engineering.
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn-primary">⚡ View Projects</a>
        <a href="#contact" className="btn-ghost">✉ Contact Me</a>
      </div>
    </section>
  );
}