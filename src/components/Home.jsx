import React from "react";

const Home = () => {
  return (
    <div>
      
      <div className="h-[90vh] lg:mt-[10vh] md:mt-[6vh] mt-[10vh] flex flex-row w-screen bg-[url('/images/mobHeroBg.png')] md:bg-[url('/images/heroBg.jpg')] bg-center  bg-cover">
        <div className="flex justify-center px-15 flex-col items-start gap-5 h-full md:w-[45%] w-full ">
          <img
            className="w-[30vw] -ml-5"
            src="/images/lineaLogo.png"
            alt="Logo"
          />
          <p className="font-medium uppercase whitespace-nowrap leading-none text-[2vw]">Where minimal design <br /> meets natural harmony</p>
          <p>
            We craft thoughtful interior experiences that balance aesthetics,
            function, and timeless design tailored to the way you live and work.
          </p>
          <button className="uppercase border text-white bg-[#3E2519] transition-all hover:bg-[#FFEBC6] hover:text-black border-[#3E2519] rounded-lg px-3 py-3">
            Free Consultation
          </button>
        </div>
        <div className="hidden md:flex uppercase text-[1.5vw] px-15 h-full w-[55%]">
            <div className="flex flex-col absolute top-[30%] right-15 items-end justify-end">
                <p>urban chic</p>
            <p>peaceful interiors</p>
            <p>modern comforts</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
