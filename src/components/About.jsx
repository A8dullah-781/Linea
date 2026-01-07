import React from "react";
import Count from "../utils/Count";

const About = () => {
  return (
    <div className="w-screen h-full px-[5vw] bg-[#FFEBC6]">
      <div className="uppercase flex justify-between  py-10 items-center">
        <div className="text-[4.5vw] font-[200]">About&nbsp;&nbsp;Us</div>
        <div>Harmony, Materiality & Feeling</div>
      </div>

      <div className="flex w-full h-1/2 flex-row">
        <div className="h-full w-[40%]  flex items-center">
          <img className=" rounded-4xl" src="/images/roomOne.jpg" alt="roomOne" />
        </div>
        <div className="h-full pl-5 flex justify-center mt-10 items-center text-[1.3vw] w-[60%]">
          <p>Design isn’t just about looks—it’s about creating an experience that resonates with the people who inhabit a space. We specialize in crafting interiors that are not only visually stunning but also highly functional, where every detail is thoughtfully considered and every corner tells a story. Our approach blends creativity with practicality, ensuring that each space is as inspiring to live in as it is to behold.</p>
        </div>
      </div>

      <div className="flex w-full py-15 h-1/2 flex-row">
        
        <div className="h-full flex flex-col pr-5 text-right gap-10 text-[1.3vw] pl-15 w-[60%]">
         <div className="-mt-5"> <p>Our 12-member team blends creativity, expertise, and precision. From designers to project managers, we work together to transform ideas into inspiring, functional spaces that leave a lasting impression.</p></div>

         <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
          <div className="text-[4.5vw]"><Count target={11} step={1} speed={110}/>+</div>
          <p className="text-[1vw]">Arcitects & Designers</p>
         </div>
         <div className="flex flex-col justify-center items-center">
          <div className="text-[4.5vw]"><Count target={130} step={10} speed={70}/>+</div>
          <p className="text-[1vw]">Projects</p>
         </div>
         <div className="flex flex-col justify-center items-center">
          <div className="text-[4.5vw]"><Count target={5} step={1} speed={140}/>+</div>
          <p className="text-[1vw]">Years Of Experience</p>
         </div>
         </div>


        </div>
        <div className="h-full w-[40%] flex items-center ">
          <img className=" rounded-4xl -mt-15 " src="/images/roomTwo.jpg" alt="roomTwo" />
        </div>
      </div>

    </div>
  );
};

export default About;
