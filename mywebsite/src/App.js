import './App.css';
import React from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Frameworks from "./components/Frameworks"

function App() {
  return (
    <div>

      <div className="flex justify-center flex-wrap h-full">

        <AboutMe />
        <Projects />
        <Skills/>
        <Frameworks/>
          
      </div>
      </div>


  );
}

export default App;
