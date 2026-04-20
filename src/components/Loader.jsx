import { useEffect, useState } from "react";

export default function Loader() {
  const messages = [
    "Booting AI modules...",
    "Compiling LangGraph...",
    "Loading agents...",
    "Portfolio ready!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 400);

    setTimeout(() => {
      document.getElementById("loader").classList.add("hide");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader">
      <div className="loader-text">INITIALIZING_PORTFOLIO.exe</div>
      <div className="loader-bar">
        <div className="loader-bar-fill"></div>
      </div>
      <div className="loader-text">{messages[index]}</div>
    </div>
  );
}