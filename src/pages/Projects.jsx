import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ourWorkOne, ourWorkTwo } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import Contact from '../utils/Contact.jsx'
import Footer from '../utils/Footer.jsx'
import ContactDark from "../utils/ContactDark";
import FooterDark from "../utils/FooterDark";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeIndexOne, setActiveIndexOne] = useState(0);
  const [activeIndexTwo, setActiveIndexTwo] = useState(0);
  const navigate = useNavigate();

  return (
   <>
    <div className="bg-[#FEF1D9] min-h-screen mt-8 pt-6 md:hidden flex flex-col items-center w-screen">
      
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
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1}
          spaceBetween={16}
          speed={700}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background:#3E2519;width:12px;height:12px;border-radius:9999px;display:inline-block;margin:0 4px;"></span>`;
            },
          }}
          className="w-[70vw] rounded-2xl h-[41vh]"
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
            if (activeIndexOne === 0) navigate("/projectOne");
            else if (activeIndexOne === 1) navigate("/projectTwo");
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
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1}
          spaceBetween={16}
          speed={700}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background:#3E2519;width:12px;height:12px;border-radius:9999px;display:inline-block;margin:0 4px;"></span>`;
            },
          }}
          className="w-[70vw] rounded-2xl h-[41vh]"
          onSlideChange={(swiper) => setActiveIndexTwo(swiper.activeIndex)}
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
            if (activeIndexTwo === 0) navigate("/projectThree");
            else if (activeIndexTwo === 1) navigate("/projectFour");
          }}
        >
          View Project
        </button>
      </div>
    </div>



<div className="hidden md:flex mt-[8vh] min-h-screen w-full items-center flex-col bg-[#3E2519]">
  <div className="uppercase text-[#FEF1D9] pb-4 pt-8 font-[200] text-[5vw]">
    Our work :
  </div>

  <div className="bg-[#FEF1D9] rounded-2xl min-h-screen w-full">
    <div className="uppercase text-[4vw] font-[200] py-6 text-center">
      residential projects
    </div>

    <div className="flex py-6 flex-row justify-center gap-4 items-center">
      <Link
        to="/projectOne"
        className="flex justify-start items-end text-white p-4 uppercase bg-[url(/images/workOne/oneMain.webp)] bg-cover h-[65vh] rounded-2xl w-[40vw]"
      >
        View Project
      </Link>

      <Link
        to="/projectTwo"
        className="flex justify-start items-end text-white p-4 uppercase bg-[url(/images/workTwo/twoMain.webp)] bg-cover h-[65vh] rounded-2xl w-[40vw]"
      >
        View Project
      </Link>
    </div>

    <div className="uppercase text-[4vw] font-[200] py-6 text-center">
      commercial projects
    </div>

    <div className="flex py-6 flex-row justify-center mb-6 gap-4 items-center">
      <Link
        to="/projectThree"
        className="flex justify-start items-end text-white p-4 uppercase bg-[url(/images/workThree/threeMain.webp)] bg-cover h-[65vh] rounded-2xl w-[40vw]"
      >
        View Project
      </Link>

      <Link
        to="/projectFour"
        className="flex justify-start items-end text-white p-4 uppercase bg-[url(/images/workFour/fourMain.webp)] bg-cover h-[65vh] rounded-2xl w-[40vw]"
      >
        View Project
      </Link>
    </div>
  </div>
</div>




    <div className="md:hidden block">
    <Contact/>
    <Footer/>
    </div>
    <div className="hidden md:block">
    <ContactDark/>
    <FooterDark/>
    </div>
   </>
  );
};

export default  Projects
