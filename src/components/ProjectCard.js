import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function ProjectCard({img, title,  link}) {
    return (
        <div 
            class="flex-wrap inline-flex items-center
                 justify-center mr-5 p-0.5 mb-2 overflow-hidden 
                 text-md mt-5 font-medium text-violet-900
                  rounded-lg group bg-gradient-to-br 
                  from-violet-400 to-violet-800 
                   md:w-[28%] dark:text-white"
                   
                   >
        <a href="#">
            <img class="rounded-t-md object-fill h-28 w-48 border-4 border-black m-0 p-0" src={img} alt="" />
        </a>
        <div class="p-2">
            <a href="#">
                <h5 class="text-gray-900 font-bold text-md tracking-tight mb-2 dark:text-white">{title}</h5>
            </a>
        </div>
    </div>
    );
}

export default ProjectCard;