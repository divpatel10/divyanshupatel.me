import React from "react"
import Tags from "./Tags";
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiAndroidstudio, SiDjango } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';




function Frameworks() {
    return (
        <div 
            className="flex flex-col items-center justify-between text-center 
                p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white 
                shadow-2xl rounded-xl mb-8 mt-5 flex-1 md:mb-8  md:w-[45%] 
                md:-ml-1 sm:flex-initial"
                
                >
            <h2 className='text-2xl sm:text-3xl font-semibold ml-10'>Frameworks/Tools</h2>

            <div>


                <div className='-mt-2 flex flex-wrap -m-1 p-6 sm:px-10'>

                    <Tags title="NodeJs" icon={<FaNodeJs className="inline-block text-lg -mt-1" />} />
                    <Tags title="Express" icon={<SiExpress className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="MongoDB" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Azure DevOps" icon={<SiAzuredevops className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Git" icon={<SiGit className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Django" icon={<SiDjango className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Android Studio" icon={<SiAndroidstudio className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Tailwind CSS" icon={<SiTailwindcss className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Bootstrap" icon={<FaBootstrap className="inline-block text-lg mr-2 -mt-1" />} />
                </div>
            </div>

        </div>

    );
}

export default Frameworks;