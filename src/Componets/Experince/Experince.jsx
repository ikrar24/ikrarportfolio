// Experience.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  // Scroll progress track karna
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end ", "end start"] // Scroll ka start aur end define
  });

  // Scroll ko translateX me map karna
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section className=" bg-transparent w-screen md:h-[900vh] lg:h-[900vh] h-[100vh]  uppercase " 
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
        className=" md:text-[420px]  text-[75px] "
      >
        
       Ex<span className=" text-yellow-400 " >p</span>eri<span className=" text-yellow-400 " >e</span>nc<span className=" text-yellow-400 " >e</span>
      </motion.h1>

    </section>
  );
}
