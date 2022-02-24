import './App.css';
import React from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
function App() {
  return (
    <div>

        <AboutMe/>
        <div className="flex flex-wrap -mx-10">
        <Skills/>
        <Projects/>
        </div>
    </div>

  );
}

export default App;
