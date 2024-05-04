import React from "react"
import Tags from "./Tags";
import { FaBook, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
const LINKED_URL = "https://www.linkedin.com/in/divvpatel/"
const GITHUB_URL = "https://github.com/divpatel10"
const EMAIL_ID = "mailto:div@duck.com"
function AboutMe() {

    return (
        <div
            class="anim-slide-up flex flex-col items-center justify-center text-center 
            p-6 from-gray-700 to-gray-900 bg-gradient-to-bl 
            text-white shadow-2xl rounded-xl mx-5 mb-8 mt-8 
            flex-1 md:mb-0 md:w-[45%] md:-ml-1 sm:flex-initial">

            <h1 class='anim-slide-up text-4xl sm:text-6xl  leading-relaxed font-semibold mt-6'>
                Hi!👋 <br />I'm Divyanshu
            </h1>
            <p class='anim-slide-up text-xl sm:text-xl pt-1 pb-4 px-5 mt-4 w-auto inline-block border-b-1 text-ellipsis' >
                I am a Software Engineer at Ally, where I design and develop innovative Reliability Solutions. Concurrently, I am advancing my expertise in Computer Science through a Master's program at Georgia Tech
                <span class="cursor" data-reactid="12">|</span>
            </p>

            <div class='flex justify-center items-center flex-wrap sm:px-5'>
                <div class='w-auto flex-none my-1'>
                    <Tags title="Resume" onclick={require("../files/resume.pdf")} isMain={true} icon={<FaBook class="inline-block text-md -mt-1" />} />
                </div>
                <div class='w-auto flex-none my-1'>
                    <Tags title="LinkedIn" onclick={LINKED_URL} isMain={true} icon={<FaLinkedin class="inline-block text-md -mt-1" />} />
                </div>
                <div class='w-auto flex-none my-1'>
                    <Tags title="Email" onclick={EMAIL_ID} isMain={true} icon={<GrMail class="inline-block text-md -mt-1" />} />
                </div>
                <div class='w-auto flex-none my-1'>
                    <Tags title="Github" onclick={GITHUB_URL} isMain={true} icon={<FaGithub class="inline-block text-md -mt-1" />} />
                </div>
            </div>
        </div>

    );
}

export default AboutMe;