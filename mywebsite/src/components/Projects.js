import React from "react"
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Projects(){
    return(
        <div className="w-full md:w-1/2 xl:w-1/2">
            <div className='flex flex-col justify-center from-gray-600 to-gray-800 bg-gradient-to-bl max-w-2xl mx-auto bg-white shadow-2xl rounded-xl p-10 mt-10'>

                <div className="text-center mt-5 text-white">

                    <p className='text-4xl sm:text-4xl font-semibold '>
                    Projects
                    </p>
                    <p className=' text-xl sm:text-2xl pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Project1 Project2 Project3 etc
                    </p>

                    <div className="flex align-center justify-center mt-4">

                    <button type="button" class="button" class="text-clemrange hover:text-white border border-yellow-400 hover:bg-clemrange focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-clemrange dark:focus:ring-yellow-200">
                        MY RESUME
                        </button>
                    </div>
        </div>
      </div>

        </div>
    );
}

export default Projects;