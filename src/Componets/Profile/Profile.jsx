import React, {useRef, useEffect} from "react";
import { RoleBgAni } from "../HeroSections/GsapAnimations/GsapAnimation";
function Profile() {
  const roleBg = useRef(null) ; 
  const role = useRef(null) ; 

  
  useEffect(() => {


    RoleBgAni(roleBg);
    RoleBgAni(role)

  }, [])
  

  return (
    <>


      <section className=" w-full h-full flex items-center justify-center">
        <main className="w-full h-full flex justify-between pt-10 md:pt-0 flex-col items-center md:flex-row ">
          <header
            className="jobRole md:w-[50%] flex flex-col justify-between md:items-center md:h-[100%] relative
         
        "
          >
            <div
              className="headerContainer  md:w-[100%] md:h-[100%] flex  flex-col items-start md:pt-9 md:pl-5  relative overflow-hidden 

"
            >
              <div className=" z-10 " ref={role}>
                <h3 className=" name  underline mb-0 text-lg md:text-[30px]  ">
                  I'm
                </h3>
              </div>

              <h2 className=" name text-[30px] md:text-[60px] font-bold  mt-0 z-10 ">
                Ikrar Ansari
              </h2>
              <h1 className=" name z-10 font-bold bg-yellow-500 p-2 pt-1 pb-1 rounded-md md:text-[20px] ">
                Front End Web Developer
              </h1>

              {/* left side circles  */}

<div className="cotainerOfNameBg" ref={roleBg}>
              <div className="leftSideCircle roleBg bg-blue-200 rounded-full w-full h-full absolute max-[700px]:hidden  top-[-45%] left-[-30%] z-0  "  ></div>
              </div>

              <div className="contectNow bg-gray-500 rounded-full w-full h-full absolute md:block sm:hidden bottom-[-56%] right-[-55%] max-[700px]:hidden z-0 ">
                {" "}
                <button className=" absolute top-[25%]  left-[15%] bg-white text-gray-700  p-5 pt-2 pb-2 rounded-md font-bold  ">
                  {" "}
                  Contect Now{" "}
                </button>{" "}
              </div>
            </div>
          </header>

          <figure className="myPicturesImg overflow-hidden h-[75vh] md:h-[100%] w-full md:w-[50%] flex justify-center items-center rounded relative ">
            <img
              src="https://i.postimg.cc/qRbKBKkX/Chat-GPT-Image-Jul-1-2025-11-03-30-PM.png"
              alt="mypicture"
              className=" max-h-full absolute bottom-[-5%] max-w-full object-cover block z-10"
              loading="lazy"
            />

            {/* w-full md:w-[450px] object-cover z-10 absolute bottom-0 border-2 border-solid border-black h-full block */}

            <div className="imgBg absolute w-[130%] h-[160%] top-[40%]  bg-gray-500 rounded-full md:top-[30%]  "></div>
          </figure>
        </main>
      </section>
    </>
  );
}

export default Profile;
