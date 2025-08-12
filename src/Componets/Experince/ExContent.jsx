import React from 'react'

function ExContent() {
  return (
    <section className=' flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center justify-center md:justify-around  ' >

<div className=' flex items-center justify-center flex-col relative ' >

<h3 className='  text-center font-bold text-2xl md:text-4xl uppercase dark:text-white mb-5 ' > <span className=' dark:text-yellow-400 ' > Hansraj </span>  Vancther pvt. ltd. </h3>

<div className=' w-5 rounded  h-1 bg-yellow-500 absolute mt-5  ' >  </div>


<p className=" text-xl md:text-2xl font-semibold mt-0 " > 1 years Experience </p>


</div>


<div className=" flex flex-col gap-3 shadow-2xl dark:shadow-white shadow-black mt-6 p-7 md:p-10 rounded-lg  uppercase w-[90%] md:w-[50%] " >


<p className=" mt-2 text-2xl font-bold" > Create a responsive <span className=" text-yellow-500 font-bold " >React</span> App. </p>


<p className=" mt-2 text-2xl font-bold" > Mainten Clean  <span className=" text-yellow-500 font-bold " >Code</span>.</p>

<p className=" mt-2 text-2xl font-bold" > Morden Website With  <span className=" text-yellow-500 font-bold " >Morden</span>Animations.</p>
<p className=" mt-2 text-2xl font-bold" > Figma To React  <span className=" text-yellow-500 font-bold " >Converting</span>Web App.</p>


<p> <b>Tech Stack</b> - React js | javaScripts | Node js | Express js | Mongodb | Html/css | Farmer/gsap.  </p>

</div>






    </section>
  )
}

export default ExContent
