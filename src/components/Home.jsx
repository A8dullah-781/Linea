import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div className="lg:h-[90vh] h-[90vh] md:h-[35vh] lg:mt-[10vh] md:mt-[6vh] mt-[8vh] flex flex-row w-screen bg-[url('/images/mobHeroBg.webp')] md:bg-[url('/images/heroBg.webp')] bg-center  bg-cover">
        <div className="flex justify-start md:justify-center md:px-15 flex-col items-center md:items-start gap-3 md:gap-5 h-full md:w-[45%] w-full ">
          <img
            className="md:w-[30vw] w-[90vw] md:mt-0 mt-6 md:-ml-5"
            src="/images/lineaLogo.webp"
            alt="Logo"
          />
          <p className="font-medium px-8 md:px-0  uppercase whitespace-nowrap leading-none text-[4.5vw] text-center md:text-left md:text-[1.8vw]">
            Where minimal design <br /> meets natural harmony
          </p>
          <p className=" px-8 text-[3.5vw] md:text-[1.2vw] text-center md:text-left md:px-0">
            We craft thoughtful interior experiences that balance aesthetics,
            function, and timeless design tailored to the way you live and work.
          </p>
          <button className="uppercase text-[3.5vw] md:text-[1.1vw] border text-white bg-[#3E2519] transition-all hover:bg-[#FFEBC6] hover:text-black border-[#3E2519] rounded-lg px-3 py-3">
            Free Consultation
          </button>
        </div>
        <div className="hidden md:flex uppercase text-[1.5vw] px-15 h-full w-[55%]">
          <div className="flex flex-col absolute top-[15%] lg:top-[30%] right-15 items-end justify-end">
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
