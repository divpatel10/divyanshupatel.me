import React from "react"
import SkillTag from "./SkillTag";
import {  SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio, SiDjango } from 'react-icons/si';
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';


function Frameworks() {
    return (

        <div 
            class="anim-slide-up flex flex-col md:flex-initial  items-center justify-center text-center 
                p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white 
                shadow-2xl rounded-xl mx-5 mb-8 mt-5 flex-1 md:mb-8  md:w-[45%] 
                md:-ml-1 " 
                >
        
        <h2 class='anim-slide-down text-2xl sm:text-3xl font-semibold ml-10'>Frameworks/Tools</h2>

        <div class='anim-fade-in -mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>

        <SkillTag title="NodeJs" icon={<FaNodeJs class="inline-block text-lg -mt-1" />} />
        <SkillTag title="Express" icon={<SiExpress class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="MongoDB" icon={<SiMongodb class="inline-block text-xl" />} />
        <SkillTag title="Azure DevOps" icon={<SiAzuredevops class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="Git" icon={<SiGit class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="Django" icon={<SiDjango class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="Android Studio" icon={<SiAndroidstudio class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="Tailwind CSS" icon={<SiTailwindcss class="inline-block text-lg mr-2 -mt-1" />} />
        <SkillTag title="Bootstrap" icon={<FaBootstrap class="inline-block text-lg mr-2 -mt-1" />} />            
        </div>

        </div>

    );
}

export default Frameworks;