// src/components/ProjectPopup.jsx
import React from "react";
import { useNavigate } from "react-router-dom"

function ProjectPopup({ project, onClose }) {

    const navigate = useNavigate()

  if (!project) return null; // Don't render if no project selected


  const handelLive = ()=>{
    
window.open(project.live, "_blank");

  }


  const handelGitHub = ()=>{
    
window.open(project.github, "_blank");

  }



  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-blue-950 p-10 rounded-xl w-[400px] relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-lg font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Project Details */}
        <img src={project.img} alt={project.title} className="rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2  ">{project.title}</h2>
        <p className=" font-semibold ">
          This is more information about {project.title}.
        </p>


<p className="text-gray-700 dark:text-gray-300 mt-5 " > { project.info } </p>

<p className=" mt-3 text-sm font-semibold uppercase " > { project.techStack } </p>

<p className="mt-3 text-[10px]">
  {project.backendGit?.length > 0 && (
    <>
      Backend :-{" "}
      <a
        href={project.backendGit}
        className="text-blue-600 dark:text-green-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.backendGit}
      </a>
    </>
  )}
</p>



<div className=" w-full flex  items-center justify-center gap-5 mt-6 " >

    <button className=" bg-yellow-500 p-2 pr-5 pl-5 rounded-lg " onClick={handelLive} > Live Link </button>

    <button className=" text-white bg-black p-2 pr-5 pl-5 rounded-lg " onClick={handelGitHub} > GitHub </button>

 
</div>


    </div>
      </div>
  );
}

export default ProjectPopup;
