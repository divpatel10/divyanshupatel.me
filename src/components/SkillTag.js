import React from "react";

const SkillTags = ({ icon, title }) => {
    return (
        <a
            className="anim-side-up relative inline-flex items-center
                         justify-center p-0.5 mb-2 overflow-hidden 
                         text-md mr-3 font-medium rounded-lg group 
                         bg-gradient-to-br from-cyan-300
                        to-blue-700 group-hover:from-cyan-500
                        group-hover:to-blue-600 hover:text-white
                        dark:text-white focus:ring-4 focus:ring-cyan-200
                        dark:focus:ring-cyan-800">

            <span className="anim-slide-down relative inline-block px-2.5 py-2 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0">
                {icon} {title}
            </span>
        </a>
    )

}


export default SkillTags;