import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      document
        .getElementById("navbar")
        ?.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">V<span>.</span>INAYAK</a>

      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#achievements">achievements</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <a href="mailto:4517vinayak12a1@gmail.com" className="nav-cta">
        hire_me()
      </a>
    </nav>
  );
}