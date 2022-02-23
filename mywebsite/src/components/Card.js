import React from "react"
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Card(){
    return(
        <div className=" w-full h-64">
            <div className='flex flex-col justify-center from-gray-600 to-gray-800 bg-gradient-to-bl max-w-lg mx-auto bg-white shadow-2xl rounded-xl p-5 mt-20'>

                <div className="text-center mt-5">

                    <p className='text-2xl sm:text-3xl font-semibold text-white'>
                    Hi!👋 <br/>I'm Divyanshu
                    </p>
                    <p className=' text-base sm:text-xl text-white pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       I'm currently a Senior Computer Science Student at Clemson University

                    </p>
                    <div className="flex align-center justify-center mt-4">

          </div>
        </div>
      </div>

        </div>
    );
}

export default Card;