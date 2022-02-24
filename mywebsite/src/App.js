import './App.css';
import React from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
function App() {
  return (
      
      <div className="flex justify-center flex-wrap ">

        <AboutMe/>

        <div className="flex flex-col justify-between mx-8 mt-20 md:mx-0 md:w-1/4 ">

        <Skills/>

        <Projects/>

        </div>
    </div>

  );
}

export default App;
