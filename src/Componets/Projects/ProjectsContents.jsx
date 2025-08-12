import React from "react";
import Capture from "../../assets/Capture.png";
import Capture2 from "../../assets/Capture2.png";
import Capture3 from "../../assets/Capture3.png";
import Capture4 from "../../assets/Capture4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./swiper.css";

import ProjectsCard from "./ProjectsCard";

function ProjectsContents() {
  
  const projects = [
    { img: Capture, title: "Hivery - landing page" },
    { img: Capture2, title: "Samboat - landing page" },
    { img: Capture4, title: "Netflix - landing page" },
    { img: Capture3, title: "E-Commerce" },
  ];



  const handleSlideClick = (index, project) => {
    console.log("Clicked Slide Index:", index);
    console.log("Project Data:", project);
  };

  return (
    <section className="flex items-center justify-center w-full">
      <div className="w-[90%] items-center justify-center p-2 flex gap-16 flex-wrap">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleSlideClick(index, project)}>
                <ProjectsCard projcectImg={project.img} projectHeading={project.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsContents;
