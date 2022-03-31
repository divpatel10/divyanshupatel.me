import './App.css';
import React from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Frameworks from "./components/Frameworks"
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <div className="flex justify-center justify-items-center flex-wrap h-screen">

        <AboutMe />
        <Projects />
        <Skills/>
        <Frameworks/>
          
      </div>
      </div>


  );
}

export default App;
