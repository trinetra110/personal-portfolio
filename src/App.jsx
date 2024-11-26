import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
