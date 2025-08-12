import React from 'react'


function ProjectsCard( { projcectImg , projectHeading ,className } ) {
  return (
  <div className=" shadow-2xl shadow-blue-950 w-[400px] h-[350px] rounded-lg flex flex-col p-2 pt-4 items-center ">

          <h5 className=" mb-5 text-center uppercase font-semibold "> { projectHeading } </h5>

          <div className="h-[70%] w-[90%] rounded-lg  ">
            <img
              src={projcectImg}
              alt=" projects "
              className=" rounded-lg object-cover w-full h-full  "
              loading='lazy'
            />
          </div>


        </div>
  )
}

export default ProjectsCard
