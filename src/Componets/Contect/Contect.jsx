import React from "react";

function Contect() {
  return (
    <section className=" w-full mt-10 flex items-center justify-center bg-gray-200 p-10 ">
      <div className="  w-[90%] ">
        <h6 className=" text-center text-3xl uppercase font-semibold text-yellow-500">
          {" "}
          Contect Me{" "}
        </h6>

        <form className="flex items-center justify-center mt-10 gap-6 flex-col ">



  <div className="relative w-[80%]">
    {/* Group parent */}
    <input 
      type="text" 
      name="your-name" 
      id="your-name" 
      placeholder=" "  
      className="peer w-full p-3 rounded-lg border cursor-text outline-none " 
    />

    <label 
      htmlFor="your-name" 
      className="absolute left-3  text-gray-400 text-sm transition-all 
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 peer-focus:top-[-20px] peer-focus:text-red-500 peer-focus:text-sm  cursor-text "
    >
      Your Name
    </label>
  </div>

  <div className="relative w-[80%]">



    {/* Group parent */}
    <textarea 
      type="text" 
      name="your-meassage" 
      id="your-meassage" 
      placeholder=" "  
      className="peer w-full p-3 rounded-lg border cursor-text outline-none " 
    />

    <label 
      htmlFor="your-meassage" 
      className="absolute left-3  text-gray-400 text-sm transition-all 
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 peer-focus:top-[-20px] peer-focus:text-red-500 peer-focus:text-sm  cursor-text "
    >
      Your Meassage
    </label>
  </div>



<button className=" p-2 bg-black text-white shadow-2xl shadow-blue-700 pl-5 pr-5 rounded-md " > Submit  </button>


</form>




      </div>
    </section>
  );
}

export default Contect;
