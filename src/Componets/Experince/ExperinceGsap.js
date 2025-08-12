import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ExperinceGsap.js
export const UseExperienceAni = ([headingEl, mainEl]) => {
  if (!mainEl || !headingEl) return;

  gsap.to(headingEl, {
    x: "-100%",
    scrollTrigger: {
      trigger: headingEl,
      scroller: "body",
      markers: true,
      start: "top top",
      end: "+=500", // animation ka duration
      scrub: 2,
      pin: true,
      pinSpacing: false // extra space remove
    }
  });
};

