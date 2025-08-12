// GsapAnimation.js
import { gsap } from "gsap";

// this is Left circle Animation
const leftAni = (element) => {
  if (!element?.current) return;

  gsap.from(element.current, {
    x: 50,
    y: 30,
    duration: 2,
    ease: "power1.inOut",
  });
};

// this is Right circle Animation
const RightAni = (element) => {
  if (!element?.current) return;
  gsap.from(element.current, {
    x: 50,
    y: -100,
    duration: 2,
    ease: "power1.inOut",
  });
};

// Nav items Lists stagger animatiom
const NavlistAni = (element) => {
  if (!element?.current) return;

  const listItems = element.current.querySelectorAll("li");

  gsap.from(listItems, {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
};

// if user close nav bar then will be show animation
const closeAniRigthBox = (element) => {
  return new Promise((resolve) => {
    if (!element?.current) return resolve(); // Resolve immediately if not found

    gsap.to(element.current, {
      scale: 5,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        // After animation, reset the style instantly (no animation)
        gsap.set(element.current, {
          scale: 1,
        });

        resolve(); // This tells the caller that animation is complete
      },
    });
  });
};

const closeAniLeftBox = (element) => {
  return new Promise((resolve) => {
    if (!element?.current) return resolve(); // Resolve immediately if not found

    gsap.to(element.current, {
      scale: 5,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        // After animation, reset the style instantly (no animation)
        gsap.set(element.current, {
          scale: 1,
        });

        resolve(); // This tells the caller that animation is complete
      },
    });
  });
};




// Reload Aimations from Navigator
const nameTlAni = (element) => {
  if (!element?.current) return;

  const liList = element.current.querySelectorAll("li");
  const tl = gsap.timeline();

  tl.fromTo(element.current, { y: -100 }, { y: 0, duration: 1 });
  tl.fromTo(liList, { y: -100, }, { y: 0, duration: 1,stagger:0.2, });





};







// profile component animation 




const RoleBgAni = (element) => {
  if (!element?.current) return;

  // safer and more specific
  const roleBg = element.current.querySelector(".leftSideCircle");
  const role = element.current.querySelectorAll(".name");
  
 

  if (!roleBg) return;

  const tl = gsap.timeline();
  tl.fromTo(
    roleBg,
    { y: -250 },
    { y: 0, duration: 2, ease: "power1.out" }
  );


tl.fromTo(role, {
  opacity:0,
  x:-100
}, {
  opacity:1, duration:2, stagger:0.2,
}
)




};





// name Animation from profile 

const roleAndNameAni = (element, delay = 0) => {
  return new Promise((resolve) => {
    if (!element?.current) return resolve();

    gsap.fromTo(
      element.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: delay, // ✅ delay added here
        onComplete: resolve,
      }
    );
  });
};






const FristBg = (element, delay = 0) => {
  return new Promise((resolve) => {
    if (!element?.current) return resolve();

    gsap.fromTo(
      element.current,
      {  opacity: 0 },
      {
        
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: delay, // ✅ delay added here
        onComplete: resolve,
      }
    );
  });
};
















// export the all Animation function
export {
  leftAni,
  RightAni,
  NavlistAni,
  closeAniLeftBox,
  closeAniRigthBox,
  nameTlAni,
  RoleBgAni,
  roleAndNameAni,
  FristBg,
};
