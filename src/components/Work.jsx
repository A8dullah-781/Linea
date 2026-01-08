import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ourWorkOne } from "../../constants/constants";
import { ourWorkTwo } from "../../constants/constants";

const cards = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" }
];

const Work = () => {
  return (
    <div className="bg-[#FEF1D9] min-h-screen md:hidden  flex flex-col items-center w-screen">
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase text-[12vw] py-6 font-light">
          Our work
        </div>
        <div className="uppercase text-[7vw] -mt-6 font-[300] text-center">
          residential <br /> projects
        </div>
      </div>

      {/* MOBILE ONLY */}
      <div className="md:hidden mt-4 flex flex-col items-center">
        {/* SWIPER */}
        <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={false}
  slidesPerView={1}
  spaceBetween={16}
  speed={700}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Pagination]}
  pagination={{
    clickable: true,
    renderBullet: (index, className) => {
      // className is "swiper-pagination-bullet"
      // hum yaha custom inline tailwind classes + style de sakte
      return `<span class="${className}" style="background:#3E2519;width:12px;height:12px;border-radius:9999px;display:inline-block;margin:0 4px;"></span>`;
    },
  }}
  className="w-[70vw] rounded-2xl h-[50vh]"
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
        <button className="bg-[#3E2519] rounded-2xl -mt-20 text-white py-2 px-4"> View Project</button>
        </div>

        <div className="uppercase mt-12 py-6 text-[7vw] font-[300] text-center">
          commercial <br /> projects
        </div>


      <div className="md:hidden mb-12 flex flex-col items-center">
        {/* SWIPER */}
        <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={false}
  slidesPerView={1}
  spaceBetween={16}
  speed={700}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Pagination]}
  pagination={{
    clickable: true,
    renderBullet: (index, className) => {
      // className is "swiper-pagination-bullet"
      // hum yaha custom inline tailwind classes + style de sakte
      return `<span class="${className}" style="background:#3E2519;width:12px;height:12px;border-radius:9999px;display:inline-block;margin:0 4px;"></span>`;
    },
  }}
  className="w-[70vw] rounded-2xl h-[50vh]"
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
        <button className="bg-[#3E2519] rounded-2xl -mt-20 text-white py-2 px-4"> View Project</button>
        </div>
    </div>
  );
};

export default Work;


