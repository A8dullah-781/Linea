import React from 'react'
import ContactDark from '../utils/ContactDark.jsx'
import { serviceInfo } from '../../constants/constants.js'
import { useState } from "react";
import FooterDark from '../utils/FooterDark.jsx';

const MainServices = () => {



  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? serviceInfo
    : serviceInfo.slice(0, 2);


  return (
   <>
    <div className='lg:mt-[10vh] hidden h-full  bg-[#FEF1D9]  py-4 w-screen md:flex flex-col items-center md:mt-[6vh] mt-[8vh]'>
        <div className='uppercase text-[5.4vw] py-4 font-[200]'>our services</div>


       <div className=' w-[95vw] p-4 overflow-x-hidden bg-[#FFEBC6] rounded-2xl'>

         {serviceInfo.map((item, index) => {
  const isEven = index % 2 === 0;

  return (
    <div
      key={item.id}
      className="flex lg:py-6 flex-row lg:h-[40vh] h-[25vh] justify-center items-center"
    >
      {isEven && (
        <div className="md:h-[60%] lg:h-full w-[30%]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full rounded-2xl  object-cover"
          />
        </div>
      )}

      <div className={`h-full ${isEven ? "w-[65%]" :"w-[65%]"} flex flex-col justify-center px-4`}>
        <h2 className="text-3xl text-left font-[300] mb-4">{item.title}</h2>
        <p className="text-sm text-left leading-relaxed">{item.description}</p>
      </div>

      {!isEven && (
        <div className="md:h-[60%] lg:h-full w-[30%]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      )}
    </div>
  );
})}
       </div>



    </div>

       <div className="block bg-[#3E2519] mt-[8vh] py-8 md:hidden">
  <div className="uppercase text-center text-[#FFEBC6] text-[10vw] pb-4 font-[200]">
    our services
  </div>

  {serviceInfo.map((item, index) => {
    const hidden = !showAll && index >= 2;

    return (
      <div
        key={item.id}
        className={`
          flex justify-center mb-4 items-center
          transition-all duration-1000 ease-in-out
          ${hidden ? "max-h-0 opacity-0 scale-95 overflow-hidden" : "max-h-[100vh] opacity-100 scale-100"}
        `}
      >
        <div className="bg-[#FFEBC6] overflow-hidden rounded-2xl h-full w-[80vw] flex flex-col">
          <img
            src={item.image}
            alt={item.title}
            className="h-[30vh] w-full object-cover"
          />

          <div className="p-4 flex flex-col gap-3">
            <h2 className="uppercase text-[4.4vw] text-center font-medium">
              {item.title}
            </h2>

            <p className="text-[2.4vw] text-center leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}

  {serviceInfo.length > 2 && (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => setShowAll(!showAll)}
        className="uppercase border bg-[#FFEBC6] border-[#3E2519] text-[#3E2519] px-6 py-3 rounded-2xl transition-all duration-300 active:scale-95"
      >
        {showAll ? "Show Less" : "View More"}
      </button>
    </div>
  )}
</div>


<ContactDark/>
<FooterDark/>
   </>
  )
}

export default MainServices