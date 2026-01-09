import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ourWorkOne, ourWorkTwo } from "../../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";

const Work = () => {
  const [activeIndexOne, setActiveIndexOne] = useState(0);
  const [activeIndexTwo, setActiveIndexTwo] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-[#FEF1D9] min-h-screen md:hidden flex flex-col items-center w-screen">

      {/* HEADER */}
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase text-[12vw] py-6 font-light">Our work</div>
        <div className="uppercase text-[7vw] -mt-6 font-[300] text-center">
          residential <br /> projects
        </div>
      </div>

      {/* FIRST SWIPER */}
      <div className="md:hidden mt-4 flex flex-col items-center">
        <Swiper
          effect="coverflow"
          grabCursor
          slidesPerView={1.1}
          spaceBetween={-30}
          speed={700}
          coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, scale: 0.8,  slideShadows: false }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
          className="w-[80vw] rounded-2xl h-[41vh]"
          onSlideChange={(swiper) => setActiveIndexOne(swiper.activeIndex)}
          
        >
          {ourWorkOne.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.backgound})` }}
                className="w-full h-[35vh] bg-cover bg-center rounded-2xl flex items-center justify-center"
              >
                <p className="text-white text-xl uppercase">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="bg-[#3E2519] rounded-2xl mt-1.5 text-white py-2 px-4"
          onClick={() => {
            if (activeIndexOne === 0)
              navigate("/projectOne", { state: { from: location.pathname } });
            else if (activeIndexOne === 1)
              navigate("/projectTwo", { state: { from: location.pathname } });
          }}
        >
          View Project
        </button>
      </div>

      {/* SECOND SWIPER */}
      <div className="uppercase mt-12 py-6 text-[7vw] font-[300] text-center">
        commercial <br /> projects
      </div>

      <div className="md:hidden mb-12 flex flex-col items-center">
         <Swiper
          effect="coverflow"
          grabCursor
          slidesPerView={1.1}
          spaceBetween={-30}
          speed={700}
          coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, scale: 0.8,  slideShadows: false }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
          className="w-[80vw] rounded-2xl h-[41vh]"
          onSlideChange={(swiper) => setActiveIndexOne(swiper.activeIndex)}
          
        >
          {ourWorkTwo.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.backgound})` }}
                className="w-full h-[35vh] bg-cover bg-center rounded-2xl flex items-center justify-center"
              >
                <p className="text-white text-xl uppercase">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="bg-[#3E2519] rounded-2xl mt-1.5 text-white py-2 px-4"
          onClick={() => {
            if (activeIndexTwo === 0)
              navigate("/projectThree", { state: { from: location.pathname } });
            else if (activeIndexTwo === 1)
              navigate("/projectFour", { state: { from: location.pathname } });
          }}
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default Work;
