import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ourWorkOne, ourWorkTwo } from "../../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [activeIndexOne, setActiveIndexOne] = useState(0);
  const [activeIndexTwo, setActiveIndexTwo] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const sectionRef = useRef(null); // main container animation
  const titleRefs = useRef([]); // heading animations
  const swiperRefs = useRef([]); // each swiper animation
  const buttonRefs = useRef([]); // buttons animation

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Animate headings
      tl.from(titleRefs.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate swipers
      tl.from(swiperRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      }, "-=0.5");

      // Animate buttons
      tl.from(buttonRefs.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=0.7");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#FEF1D9] min-h-screen md:hidden flex flex-col items-center w-screen">

      {/* HEADER */}
      <div ref={el => titleRefs.current[0] = el} className="flex flex-col justify-center items-center">
        <div className="uppercase text-[12vw] py-6 font-light">Our work</div>
        <div className="uppercase text-[7vw] -mt-6 font-[300] text-center">
          residential <br /> projects
        </div>
      </div>

      {/* FIRST SWIPER */}
      <div ref={el => swiperRefs.current[0] = el} className="md:hidden mt-4 flex flex-col items-center">
        <Swiper
          effect="coverflow"
          grabCursor
          slidesPerView={1.2}
          spaceBetween={-30}
          speed={700}
          slidesOffsetBefore={40}
          slidesOffsetAfter={40}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.8,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
          className="w-[99vw] rounded-2xl h-[41vh]"
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
          ref={el => buttonRefs.current[0] = el}
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
      <div ref={el => titleRefs.current[1] = el} className="uppercase mt-12 py-6 text-[7vw] font-[300] text-center">
        commercial <br /> projects
      </div>

      <div ref={el => swiperRefs.current[1] = el} className="md:hidden mb-12 flex flex-col items-center">
        <Swiper
          effect="coverflow"
          grabCursor
          slidesPerView={1.2}
          spaceBetween={-30}
          speed={700}
          slidesOffsetBefore={40}
          slidesOffsetAfter={40}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.8,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
          className="w-[99vw] rounded-2xl h-[41vh]"
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
          ref={el => buttonRefs.current[1] = el}
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
