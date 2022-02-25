import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function Skills() {
    return (
        <div className="flex flex-col from-gray-700 to-gray-900 bg-gradient-to-bl text-white rounded-xl pt-6 px-4 mt-12 shadow-2xl">
            <h2 className='text-2xl sm:text-3xl font-semibold ml-10'>Skills</h2>
            <div className="mt-6">
                <p className='text-xl sm:text-2xl ml-10'>
                    Languages
                </p>

                <div className='-mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>

                    <Tags title="JavaScript" icon={<SiJavascript className="inline-block text-lg" />} />
                    <Tags title="Python" icon={<SiPython className="inline-block text-lg mr-2" />} />
                    <Tags title="Java" icon={<FaJava className="inline-block text-xl mr-2" />} />
                    <Tags title="C#" icon={<SiSharp className="inline-block text-lg mr-2" />} />
                    <Tags title="C++" icon={<SiCplusplus className="inline-block text-lg mr-2" />} />
                </div>
            </div>
            <div>
                <p className='text-xl sm:text-2xl ml-10'>
                    Frameworks/Tools
                </p>

                <div className='-mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>

                    <Tags title="NodeJs" icon={<FaNodeJs className="inline-block text-lg -mt-1" />} />
                    <Tags title="Express" icon={<SiExpress className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="MongoDB" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Git" icon={<SiGit className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Azure DevOps" icon={<SiAzuredevops className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Tailwind CSS" icon={<SiTailwindcss className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Bootstrap" icon={<FaBootstrap className="inline-block text-lg mr-2 -mt-1" />} />
                </div>
            </div>

        </div>

    );
}

export default Skills;