import React from "react"
import Tags from "./Tags";
import { FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-6 from-gray-700 to-gray-900 text-white bg-gradient-to-bl shadow-2xl rounded-xl mx-10  mb-8 mt-24 flex-1 md:mb-0  md:w-1/2 sm:flex-initial">
            <div>

                <h1 className='text-4xl sm:text-6xl  leading-relaxed font-semibold mt-6'>
                    Hi!👋 <br />I'm Divyanshu
                </h1>
                <p className=' text-xl sm:text-2xl pt-1 pb-4 px-5 mt-8 w-auto inline-block border-b-1 text-ellipsis' >
                    I'm currently a Senior Computer Science Student at Clemson University
                    <span class="cursor"><b> |</b></span>
                </p>



                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        MY RESUME
                    </span>
                </button>

                <div className='my-3 flex flex-wrap justify-center -m-1 relative p-10  px-10 sm:px-32'>

                    <Tags title="Email" icon={<GrMail className="inline-block text-xl mr-2"/>}/>
                    <Tags title="Github" icon={<FaGithub className="inline-block text-xl mr-2"/>}/>
                    <Tags title="LinkedIn" icon={<FaLinkedin className="inline-block text-xl mr-2"/>}/>

                </div>
            </div>
        </div>


    );
}


export default AboutMe;