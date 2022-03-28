import React from "react"
import Tags from "./Tags";
import { FaBook, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
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

                <div className='my-2 flex flex-wrap justify-center -m-1 relative mt-12 p-4 sm:px-10'>
                    <Tags title="Resume" onclick={require("../files/resume.pdf")} isMain={true} icon={<FaBook className="inline-block text-md" />} />
                    <Tags title="LinkedIn" onclick={LINKED_URL} isMain={true} icon={<FaLinkedin className="inline-block text-md" />} />
                    <Tags title="Email" onclick={EMAIL_ID} isMain={true} icon={<GrMail className="inline-block text-md" />} />
                    <Tags title="Github" onclick={GITHUB_URL} isMain={true} icon={<FaGithub className="inline-block text-md" />} />

                </div>
            </div>


    );
}


export default AboutMe;