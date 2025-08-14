import React, { useState } from "react";
import Capture from "../../assets/Capture.PNG";
import Capture2 from "../../assets/Capture2.PNG";
import Capture3 from "../../assets/Capture3.PNG";
import Capture4 from "../../assets/Capture4.PNG";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";
import ProjectsCard from "./ProjectsCard";
import ProjectPopup from "./PorjectPopUp";


function ProjectsContents() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { img: Capture, title: "Hivery - landing page" , info:" This is A landing page of Hivery Ai Web App it's figma to react convert website pixel perfect " ,  techStack:" React js | Figma | Tailwind Css" , github:"https://github.com/ikrar24/Hivry-assigments"  , live:"https://hivry-assigment.netlify.app/" },

    { img: Capture2, title: "Samboat - landing page",  info:" This My freelancing. Clint to need desktop version only of figma to react app ", techStack:" Figma | React js | Tailwind Css |", github:"https://github.com/ikrar24/samBoat"  , live:"https://samboat.netlify.app/" },


    { img: Capture4, title: "Netflix - landing page" , info:" This a fully clone landing page of Netfilix.com and it's also Full Responsive Web." , techStack:" Html | Css | javaScripts "  , github:"https://github.com/ikrar24/netflix-clone"  , live:"https://netfliz-clone-project.netlify.app/" },


    { img: Capture3, title: "E-Commerce" , info:" This is a full responsive app with all funtionalty of E-commerce. " , techStack:" React js | Tailwind Css | javaScripts | Node js | Express js | Mongodb " , backendGit:"https://github.com/ikrar24/foodEcommerce" , github:" https://github.com/ikrar24/fullstack-foodEcommerce-web-app"  , live:"https://foodsecommerce.netlify.app/" },
  ];

  const handleSlideClick = (project) => {
    setSelectedProject(project); // Open popup with clicked project
  };

  const closePopup = () => {
    setSelectedProject(null); // Close popup
  };

  return (
    <section id="project" className="flex items-center justify-center w-full ">
      <div className="w-[100%]  md:w-[90%] items-center justify-center p-2 flex gap-16 flex-wrap">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="projectSwiper "
          style={{
            width:"300px",
            
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} 
             
            
             >
              <div onClick={() => handleSlideClick(project)}>
                <ProjectsCard
                  projcectImg={project.img}
                  projectHeading={project.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup Component */}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </section>
  );
}

export default ProjectsContents;
