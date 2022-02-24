import React from "react"
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Projects(){
    return(
        <div className="flex flex-col from-gray-700 to-gray-900 bg-gradient-to-bl text-white rounded-xl p-10 items-center mt-10 shadow-2xl">


                    <p className='text-4xl sm:text-4xl font-semibold '>
                    Skills, Frameworks, and Tools
                    </p>
                    <p className=' text-xl sm:text-2xl pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Python JavaScript C# Java C++ GoLang MERN Stack 
                    </p>

                    <div className="flex align-center justify-center mt-4">

                    <button type="button" class="button" class="text-clemrange hover:text-white border border-yellow-400 hover:bg-clemrange focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-clemrange dark:focus:ring-yellow-200">
                        MY RESUME
                        </button>
      </div>

        </div>
    );
}

export default Projects;