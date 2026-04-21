import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import useScrollReveal from "./hooks/useScrollReveal";
import useMagneticTilt from "./hooks/useMagneticTilt";

function App() {
  useScrollReveal();
  useMagneticTilt();

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Loader />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;