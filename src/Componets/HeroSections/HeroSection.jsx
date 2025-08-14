import React, { useState, useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaBars, FaRegSun, FaSun } from "react-icons/fa";
import GsapAnimation from "../../ContextApi/Context";
import { Link } from "react-scroll";
import {
  closeAniLeftBox,
  closeAniRigthBox,
  leftAni,
  NavlistAni,
  RightAni,
  nameTlAni,
  
} from "./GsapAnimations/GsapAnimation";
import Profile from "../Profile/Profile";




// NOTE :- Hare md: means 1100px For Some desing Reason not md:768px.

function HeroSection() {
  const [ShowNav, setShowNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const leftCircle = useRef(null);
  const rightCircle = useRef(null);
  const listContainer = useRef(null);
  const nameList = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    // Initial check
    if (mediaQuery.matches) {
      setShowNav(true); // desktop = show nav
    } else {
      setShowNav(false); // mobile = hide nav
    }

    const handleMediaChange = (e) => {
      if (e.matches) {
        setShowNav(true); // desktop
      } else {
        setShowNav(false); // mobile
      }
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Gsap Animation is hare
  const navAnimation = () => {
    setShowNav(true);
    leftAni(leftCircle);
    RightAni(rightCircle);
    NavlistAni(listContainer);
  };

  const closeNav = async () => {
    await Promise.all([
      closeAniLeftBox(leftCircle),
      closeAniRigthBox(rightCircle),
    ]);
    setShowNav(false);
  };


  useEffect(() => {
    
    nameTlAni(nameList);
    nameTlAni(listContainer);
    // navReloadAin(listContainer);

  }, [])
  

// darkMood on and off
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);


  return (
    <header className="w-full h-screen text-black dark:text-white dark:bg-gray-950 p-0">
      <GsapAnimation.Provider value={leftCircle}>
        <section className="navBarContainer flex items-center justify-center mt-2 ">
          <nav className="navBarBox relative flex justify-between h-full w-[90%] items-center    ">
            {/* Name */}
            <ul className="nameContainer flex w-[95%] md:w-[73%] justify-between items-center  ">
              <li className="nameList" ref={nameList}>
                <a
                  href="/"
                  className="nameLink text-[20px] no-underline md:text-[25px]"
                >
                  Ikrar Ansari
                </a>
              </li>


{/* {
  DarkMood?<FaRegSun className=" cursor-pointer text-[20px] md:text-[22px] " onClick={darkMood}/> : (
    <FaSun/>
  )
} */}

<div className="darkMoodBox " onClick={()=>setDarkMode(!darkMode)} >
{darkMode ? <FaRegSun className=" text-[20px]  cursor-pointer md:mr-5 " title="Dark Mood"/> : <FaSun className=" text-[20px] cursor-pointer md:mr-5 "  title="Light Mood" />}
</div>
              


            </ul>



            {/* ☰ Open menu */}
            <FaBars
              className="cursor-pointer md:hidden"
              onClick={navAnimation}
            />

            {/* Navigation menu */}
            <div
              className={`navList ${
                ShowNav ? "flex" : "hidden"
              } w-full h-screen top-0 absolute  right-[-6%] overflow-hidden backdrop-blur-sm p-6 rounded-md md:flex flex-col md:w-auto md:h-auto justify-center md:p-0 md:top-0 md:right-0 md:flex-row md:bg-transparent z-50` }
            >
              {/* ✖ Close menu */}
              <RxCross1
                className="fixed right-10 top-10 text-black dark:text-white text-2xl cursor-pointer z-50 md:hidden"
                onClick={closeNav}
              />

              {/* Links */}
              <ul
                className="w-full h-full flex flex-col justify-center items-center gap-10 z-10  border-solid text-[18px] md:flex-row md:border-none"
                ref={listContainer}
              >
                <li className="  " >
                  <a href="/" >Home</a>
                </li>


                <li>

                  <Link to="about" smooth={true} duration={500} offset={-50} style={{cursor:"pointer"}} onClick={ ()=>{ setShowNav(false) } } >About</Link>

                </li>


                <li>
                    <Link to="project" smooth={true} duration={500} offset={-50} style={{cursor:"pointer"}} onClick={ ()=>{ setShowNav(false) } } >Project</Link>
                </li>

                <li>

                    <Link to="contect" smooth={true} duration={500} offset={-50} style={{cursor:"pointer"}} onClick={ ()=>{ setShowNav(false) } } >Contect</Link>

                </li>

              </ul>

              {/* Background circles (mobile only) */}
              <div
                ref={leftCircle}
                className="w-[400px] h-[350px] rounded-full fixed top-[-20%] left-[-45%] bg-black md:hidden"
              ></div>

              <div
                ref={rightCircle}
                className="w-[400px] h-[350px] rounded-full fixed bottom-[-20%] right-[-45%] bg-black md:hidden  "
              ></div>
            </div>
          </nav>
        </section>
      </GsapAnimation.Provider>


{/* this is another componet */}
<Profile/>

    </header>
  );

            }

export default HeroSection;
