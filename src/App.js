import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact";
import Work from "./components/work/Work";
import Education from "./components/education/Education";
import Coding from "./components/coding/Coding";


function App() {
  document.title = "Irfan Ahmed Mohammad";
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Education />
      <Coding />
      <Contact />
    </div>
  );
}

export default App;
