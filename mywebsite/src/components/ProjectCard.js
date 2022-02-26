import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';
import uip from '../images/universeinpixels.png'




function ProjectCard() {
    return (
        <div class="flex-wrap relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-md mr-5 mt-5 font-medium text-violet-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  md:w-[30%] dark:text-white">
        <a href="#">
            <img class="rounded-t-md" src={uip} alt="" />
        </a>
        <div class="p-2">
            <a href="#">
                <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">Universe in Pixels</h5>
            </a>
        <p>This is a dumbass project I want to flex and oversell to make you think I am very smart haha plx hire</p>
        </div>
    </div>
    );
}

export default ProjectCard;