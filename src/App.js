import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App bg-slate-900 text-white">
      <div className="container section-container mx-auto">
        <Navbar />
        
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
