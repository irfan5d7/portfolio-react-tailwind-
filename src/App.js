import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Education from "./components/Education";
import Leetcode from "./components/Leetcode";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Education />
      <Leetcode />
      <Contact />
    </div>
  );
}

export default App;
