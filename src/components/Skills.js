import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function Skills() {
    return (
        <div className="flex flex-col md:flex-initial items-center justify-center text-center p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white shadow-2xl rounded-xl mx-5  mb-8 mt-5 flex-1 md:mb-8  md:w-[45%] md:-ml-1">
            <h2 className='text-2xl sm:text-3xl font-semibold ml-10'>Languages</h2>
            <div className="mt-6">


                <div className='-mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>
                    <Tags title="JavaScript" icon={<SiJavascript className="inline-block text-lg" />} />
                    <Tags title="Python" icon={<SiPython className="inline-block text-lg mr-2" />} />
                    <Tags title="Java" icon={<FaJava className="inline-block text-xl mr-2" />} />
                    <Tags title="C#" icon={<SiSharp className="inline-block text-lg mr-2" />} />
                    <Tags title="C++" icon={<SiCplusplus className="inline-block text-lg mr-2" />} />
                </div>
            </div>

        </div>

    );
}

export default Skills;