import React from "react";
import SkillsCard from "./SkillsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SkillsSwiper.css";
import skills1 from "../../assets/skills1.png"
import skills2 from "../../assets/skills2.png"
import skills3 from "../../assets/skills3.svg"
import skills4 from "../../assets/skills4.png"
import skills8 from "../../assets/skills8.png"
import skills5 from "../../assets/skills5.png"
import skills6 from "../../assets/skills6.webp"
import skills7 from "../../assets/skills7.png"
import skills10 from "../../assets/skills10.jpg"
import skills11 from "../../assets/skills11.png"

const skils = [
  { imgScr:skills2 },
  { imgScr:skills5 },
  { imgScr: skills8 },
  { imgScr:skills4 },
  { imgScr: skills3 },
  { imgScr: skills1 },
  { imgScr: skills6 },
  { imgScr: skills7 },
  { imgScr: skills10 },
  { imgScr: skills11 },


  
  
];

function Skills() {
  return (
    <div className=" flex items-center justify-center w-full " >
    <section className="w-[90%] md:w-[75%]  h-[70vh] md:h-[80vh] mt-10">


 <h2 className=" flex items-center justify-center text-5xl font-bold uppercase text-yellow-400 mb-10 " >
    Skils
</h2>


      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
        style={{
            
        }}
      >
        {skils.map((item, index) => (
          <SwiperSlide key={index} 
           style={{
            backgroundColor:"transparent",
            borderRadius:"0px",
            boxShadow:" none ",
            
           }}

          >
            <SkillsCard skilsImg={item.imgScr} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div>
  );
}

export default Skills;
