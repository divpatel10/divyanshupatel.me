import React from "react"
import SkillTag from "./SkillTag";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function Skills() {
    return (
        <div class="anim-slide-up flex flex-col md:flex-initial items-center justify-center text-center p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white shadow-2xl rounded-xl mx-5  mb-8 mt-5 flex-1 md:mb-8  md:w-[45%] md:-ml-1">
            <h2 class='anim-fade-in text-2xl sm:text-3xl font-semibold ml-10'>Languages</h2>
            <div class="mt-6">


                <div class='anim-fade-in -mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>
                    <SkillTag title="JavaScript" icon={<SiJavascript class="inline-block text-lg" />} />
                    <SkillTag title="Python" icon={<SiPython class="inline-block text-lg mr-2" />} />
                    <SkillTag title="Java" icon={<FaJava class="inline-block text-xl mr-2" />} />
                    <SkillTag title="C#" icon={<SiSharp class="inline-block text-lg mr-2" />} />
                    <SkillTag title="C++" icon={<SiCplusplus class="inline-block text-lg mr-2" />} />
                </div>
            </div>

        </div>

    );
}

export default Skills;