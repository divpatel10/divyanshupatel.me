import React from "react";

function openWindow(url) {
    const link = document.createElement('a');
    if (url != "") {
        link.href = url;

        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}

const Tags = ({ icon, title, onclick = "", isMain = false }) => {
    if (isMain) return (
        <a
            class="anim-slide-up relative inline-flex items-center justify-center p-0.5
             mb-2 overflow-hidden text-xl mr-6 font-medium text-gray-900
              rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500
               group-hover:from-cyan-500 group-hover:to-blue-600 
               hover:text-white dark:text-white focus:ring-4
                focus:ring-cyan-200 dark:focus:ring-cyan-800 cursor-pointer"

            onClick={e => {
                e.preventDefault();
                openWindow(onclick);
            }
            }
        >
            <span class="anim-slide-down relative inline-block px-5 py-2.5
                        transition-all ease-in duration-75 bg-black dark:bg-gray-900
                        rounded-md group-hover:bg-opacity-0">
                {icon} {title}
            </span>
        </a>
    )
    else {
        return (
            <a
                className="anim-side-up relative inline-flex items-center
                         justify-center p-0.5 mb-2 overflow-hidden 
                         text-md mr-3 font-medium text-violet-900 
                         rounded-lg group bg-gradient-to-br from-cyan-500
                          to-blue-500 group-hover:from-cyan-500
                           group-hover:to-blue-600 hover:text-white
                            dark:text-white focus:ring-4 focus:ring-cyan-200
                             dark:focus:ring-cyan-800 cursor-pointer"
                onClick={e => {
                    e.preventDefault();
                    openWindow(onclick);
                }

                }
            >

                <span className="anim-slide-down relative inline-block px-2.5 py-2 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0">
                    {icon} {title}
                </span>
            </a>
        )
    }
}


export default Tags;