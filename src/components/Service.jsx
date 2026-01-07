import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Service = () => {
  return (
    <div className=" h-full px-[5vw] pb-10 w-screen bg-[#FEF1D9]">
      <div className="text-[4.5vw] uppercase py-5 font-[200]">Our services</div>
      <div className="rounded-2xl relative overflow-hidden h-[80vh] w-full ">
        <img src="/images/servicesBg.jpg" alt="serivcesbg" />
        <div className="h-[47%] flex flex-col p-[1.5vw] justify-between items-start box w-[50%] rounded-2xl bg-[#FFEBC6] absolute top-0 right-0">
          <div>
            <div className="uppercase text-[3vw] font-medium ">
              interior design
            </div>
            <p>
              Thoughtful layouts and material choices designed to create
              balanced, functional, and visually refined interior spaces.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="arrow bg-[#3E2519] font-lighter -rotate-45 text-white text-[2.5vw] rounded-full p-2 ">
              <IoMdArrowForward />
            </div>
            <div className="text-[1.5vw]">More Services</div>
          </div>
        </div>
        <div className="h-[47%] w-[50%] flex flex-col p-[1.5vw] justify-between items-start rounded-2xl bg-[#FFEBC6] absolute bottom-0 left-0">
          {" "}
          <div>
            <div className="uppercase text-[3vw] font-medium ">
              3d Visualization
            </div>
            <p>
              Clear and realistic 3D concepts that help clients visualize the final interior before execution begins.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="arrow bg-[#3E2519] font-lighter -rotate-45 text-white text-[2.5vw] rounded-full p-2 ">
              <IoMdArrowForward />
            </div>
            <div className="text-[1.5vw]">Discover More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
