import React from "react"
import Tags from "./Tags";
import { SiExpress, SiMongodb, SiAzuredevops, SiGit, SiTailwindcss, SiJavascript, SiCplusplus, SiReact } from 'react-icons/si';
import { FaBootstrap, FaJava, FaNodeJs, FaPlusCircle } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";
import uip from '../images/universeinpixels.png'
import secfrontier from '../images/secondary-frontier.png'
import gauntlet from '../images/gauntlet.png'

function Projects() {
    const PROJECT_TIMESTAMP = "https://div-timestamp-microservice.herokuapp.com/"
    const PROJECT_FILE_METADATA = "https://file-mta-dta.herokuapp.com"
    const PROJECT_URL_SHORTENER = "https://u-r-lshrtner.herokuapp.com"
    const PROJECT_GAUNTLET = "https://github.com/divpatel10/gauntlet"
    const PROJECT_SF = "https://divpatel10.github.io/The-Secondary-Frontier/"
    const PROJECT_UIP = "https://github.com/divpatel10/SpaceApp"
    return (

        <div className="anim-slide-up flex flex-col md:flex-initial items-center justify-center text-center p-6 from-gray-700 to-gray-900 bg-gradient-to-bl text-white shadow-2xl rounded-xl mb-8 mt-8 flex-1 md:mb-0 md:w-[45%] md:-ml-1 ">

            <div>
                <p className='anim-slide-down text-2xl sm:text-3xl font-semibold ml-10 mb-10 '>
                    My Projects
                </p>

                <ProjectCard img={uip} title="Universe in Pixels" link={PROJECT_UIP} />
                <ProjectCard img={secfrontier} title="The Secondary Frontier" link={PROJECT_SF}  />
                <ProjectCard img={gauntlet} title="Gauntlet" link={PROJECT_GAUNTLET} />

                <div className='anim-fade-in my-4 flex flex-wrap -m-1 mt-4 p-6 sm:px-10'>
                    <Tags title="Time Stamp Microservice" onclick={PROJECT_TIMESTAMP} icon={<SiExpress className="inline-block text-lg -mt-1" />} />
                    <Tags title="Green Screen Composition" icon={<SiCplusplus className="inline-block text-xl" />} />
                    <Tags title="This Webpage" icon={<SiReact className="inline-block text-xl" />} />
                    <Tags title="URL Shortener" onclick={PROJECT_URL_SHORTENER} icon={<SiMongodb className="inline-block text-xl" />} />
                    <Tags title="Barcode Reader" icon={<SiCplusplus className="inline-block text-xl" />} />
                    <Tags title="File Meta Data Microservice" onclick={PROJECT_FILE_METADATA} icon={<SiExpress className="inline-block text-lg mr-2 -mt-1" />} />
                    {/* <Tags title="More Projects..." icon={<FaPlusCircle className="inline-block text-xl" />} /> */}

                </div>
            </div>

        </div>

    );
}

export default Projects;