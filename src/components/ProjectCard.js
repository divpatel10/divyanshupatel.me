import React from "react"

function openWindow(url){
    const link = document.createElement('a');
        if(url != ""){
			link.href = url;

			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			link.remove();
        }
}

function ProjectCard({img, title,  link}) {
    return (
  <div class="inline-block items-center justify-center min-w-[28%] px-4 py-2"
  onClick={ e => {
                     e.preventDefault();
                     openWindow(link);
                 }
                 }

  >
    <div class="rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img class="object-fill h-28 w-48 border-blue-500 border-2" src={img} alt="" />
      </div>
      <div class="py-2 px-2 bg-gradient-to-br from-blue-400 to-blue-600">
        <h3 class="text-sm mb-2 font-semibold w-auto text-white">{title}</h3>
      </div>
    </div>
  </div>
    //     <div 
    //         class="flex-wrap inline-flex items-center
    //              justify-center mr-5 p-0.5 mb-2 overflow-hidden 
    //              text-md mt-5 font-medium text-violet-900
    //               rounded-lg group bg-gradient-to-br 
    //               from-violet-400 to-violet-800 
    //                md:w-[28%] dark:text-white"
                   
    //                onClick={ e => {
    //                 e.preventDefault();
    //                 openWindow(link);
    //             }
    //             }

    //                >


    //     <a href="#">
    //         <img class="rounded-t-md object-fill h-28 w-48 border-black m-0 p-0" src={img} alt="" />
    //     </a>
    //     <div class="p-2">
    //         <a href="#">
    //             <h5 class="text-gray-900 font-bold text-md tracking-tight mb-2 dark:text-white">{title}</h5>
    //         </a>
    //     </div>
    // </div>
    );
}

export default ProjectCard;