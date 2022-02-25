import React from "react"
import Tags from "./Tags";
import { FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';

function Skills() {
    return (
        <div className="flex flex-col from-gray-700 to-gray-900 bg-gradient-to-bl text-white rounded-xl py-14 px-4  mt-24 shadow-2xl">


            <p className='text-3xl sm:text-4xl font-semibold '>
                Skills
            </p>

            <div className='my-4 flex flex-wrap -m-1 mt-2 p-6 sm:px-10'>

                <Tags title="LinkedIn"  icon={<FaLinkedin className="inline-block text-lg" />} />
                <Tags title="Email" icon={<GrMail className="inline-block text-lg mr-2" />} />
                <Tags title="Github" icon={<FaGithub className="inline-block text-lg mr-2" />} />

            </div>
        </div>

    );
}

export default Skills;