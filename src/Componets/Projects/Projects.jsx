
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] 
  });

  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section className=" bg-transparent w-screen md:h-[900vh] h-[100vh] uppercase " 
      ref={sectionRef}
      style={{
        padding: "50px",

      }  }
    >
      <motion.h1
        style={{
          x,
          position: "sticky",
          top: 0,
          fontWeight: "bold",
          padding: "20px"
        }}
        className=" md:text-[500px] text-[90px] "
      >
        
    Pr<span className=" text-yellow-400 ">o</span>je<span className=" text-yellow-400 ">c</span>t<span className=" text-yellow-400 ">s</span>
      </motion.h1>

    </section>
  );
}
