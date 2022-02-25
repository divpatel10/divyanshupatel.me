import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function Projects() {
    return (
        <div className="flex flex-col from-gray-700 to-gray-900 bg-gradient-to-bl text-white rounded-xl pt-6 px-4 mt-10 shadow-2xl">

            <div>
                <p className='text-2xl sm:text-3xl font-semibold ml-10'>
                    Projects
                </p>

                <div className='my-4 flex flex-wrap -m-1 mt-2 p-6 sm:px-10'>

                    <Tags title="Project 1" icon={<FaNodeJs className="inline-block text-lg -mt-1" />} />
                    <Tags title="Project 1" icon={<SiExpress className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Project 1" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Project 1" icon={<SiGit className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Project 1" icon={<SiAzuredevops className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Project 1" icon={<SiTailwindcss className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Project 1" icon={<FaBootstrap className="inline-block text-lg mr-2 -mt-1" />} />
                    
                </div>
            </div>

        </div>

    );
}

export default Projects;