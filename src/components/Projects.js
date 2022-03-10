import React from "react"
import Tags from "./Tags";
import { SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs, FaPlusCircle } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";
import uip from '../images/universeinpixels.png'
import secfrontier from '../images/secondary-frontier.png'
import gauntlet from '../images/gauntlet.png'

function Projects() {
    const PROJECT_TIMESTAMP = "https://div-timestamp-microservice.herokuapp.com/"
    return (

        <div className="flex flex-col items-center justify-between text-center p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white shadow-2xl rounded-xl mb-8 mt-8 flex-1 md:mb-0 md:w-[45%] md:-ml-1 sm:flex-initial">

            <div>
                <p className='text-2xl sm:text-3xl font-semibold ml-10 '>
                    Projects
                </p>

                <ProjectCard img={uip} title="Universe in Pixels"  />
                <ProjectCard img={secfrontier} title="The Secondary Frontier"  />
                <ProjectCard img={gauntlet} title="Gauntlet" />



                <div className='my-4 flex flex-wrap -m-1 mt-2 p-6 sm:px-10'>



                    <Tags title="Time Stamp Microservice" onclick={PROJECT_TIMESTAMP} icon={<FaNodeJs className="inline-block text-lg -mt-1" />} />
                    <Tags title="Barcode Reader" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Caesars Cipher" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="File Meta Data Microservice" icon={<SiExpress className="inline-block text-lg mr-2 -mt-1" />} />
                    <Tags title="Green Screen Composition" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Portfolio Webpage" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="URL Shortener" icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="More Projects..." icon={<FaPlusCircle className="inline-block text-xl" />} />

                </div>
            </div>

        </div>

    );
}

export default Projects;