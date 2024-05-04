import React from "react"

function openWindow(url) {
  const link = document.createElement('a');
  if (url !== "") {
    link.href = url;

    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

function ProjectCard({ img, title, link, description }) {
  return (
    <div class="anim-slide-up inline-block items-center justify-center min-w-[30%] px-4 py-2"
      onClick={e => {
        e.preventDefault();
        openWindow(link);
      }
      }

    >
      <div class="overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
        <div>
          <img class="object-fill h-28 w-48 border-blue-500 border-2" src={img} alt="" />
        </div>
        <div class="py-2 px-2 bg-gradient-to-br from-blue-400 to-blue-600 w-48">
          <h3 class="text-sm mb-2 font-bold w-auto text-white">{title}</h3>
          <p class="text-sm">{description}</p>
        </div>
      </div>
    </div>

  );
}

export default ProjectCard;