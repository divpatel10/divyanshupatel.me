import React from "react"
import Tags from "./Tags";
import { FaGithub, FaPaperclip } from 'react-icons/fa';
import { GrMail, GrResume } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import { Resume } from '../files/resume.pdf'
const LINKED_URL = "https://www.linkedin.com/in/divvpatel/"
const GITHUB_URL = "https://github.com/divpatel10"
const EMAIL_ID = "mailto:div@duck.com"
const RESUME_PDF = "./files/resume.pdf"
function AboutMe() {

    return (
        <div 
            className="flex flex-col items-center justify-center text-center 
                        p-6 from-gray-700 to-gray-900 bg-gradient-to-bl 
                        text-white shadow-2xl rounded-xl mx-5  mb-8 mt-8 
                        flex-1 md:mb-0  md:w-[45%] md:-ml-1 sm:flex-initial "
                        
                        >
                <h1 className='text-4xl sm:text-6xl  leading-relaxed font-semibold mt-6'>
                    Hi!👋 <br />I'm Divyanshu
                </h1>
                <p className=' text-xl sm:text-3xl pt-1 pb-4 px-5 mt-4 w-auto inline-block border-b-1 text-ellipsis' >
                    I'm currently a Senior Computer Science Student at Clemson University
                    <span class="cursor"><b> |</b></span>
                </p>

                 <a 
                    class="relative inline-flex items-center
                    justify-center p-0.5 mb-2 overflow-hidden 
                    text-xl font-medium text-gray-900 rounded-lg group
                    bg-gradient-to-br from-cyan-500 to-blue-500 
                    group-hover:from-cyan-500 group-hover:to-blue-500
                    hover:text-white dark:text-white focus:ring-4
                    focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    href = {require("../files/resume.pdf")} target = "_blank"

                   >
                    <span class="relative inline-block px-3 py-2.5  transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                       <MdContactPage className="inline-block text-2xl ml-2" /> <span className="mr-3">Resume</span>
                    
                    </span>
                </a> 

                <div className='my-2 flex flex-wrap justify-around -m-1 relative mt-12 p-4 px-6 sm:px-20'>

                    <Tags title="LinkedIn" onclick={LINKED_URL} isMain={true} icon={<FaLinkedin className="inline-block text-lg mx-2" />} />
                    <Tags title="Email" onclick={EMAIL_ID} isMain={true} icon={<GrMail className="inline-block text-lg mx-2" />} />
                    <Tags title="Github" onclick={GITHUB_URL} isMain={true} icon={<FaGithub className="inline-block text-lg mx-2" />} />

                </div>
            </div>


    );
}


export default AboutMe;