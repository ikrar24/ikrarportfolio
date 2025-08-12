import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ScrollTest() {
  const containerRef = useRef(null);

  // Scroll progress container ke andar hi track karo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll progress (0 → 1) ko top value (0px → 300px) me map karna
  const topValue = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div
      ref={containerRef}
      className="bg-red-400 h-[200vh] relative overflow-hidden"
    >
      <motion.p
        className="text-[10vh] absolute"
        style={{
          top: topValue // Yaha lagane se scroll ke sath move karega
        }}
      >
        Experience
      </motion.p>
    </div>
  );
}

export default ScrollTest;
