import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TestmonialsCards } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS_PER_VIEW = 4;

const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const total = TestmonialsCards.length;

  // GSAP refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileRef = useRef(null);
  const whyChooseRef = useRef(null);

  // Scroll-trigger animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      // Animate title
      tl.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animate desktop/tablet cards
      tl.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }, "-=0.3");

      // Animate mobile swiper
      if (mobileRef.current) {
        tl.from(mobileRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.5");
      }

      // Animate "why choose us" section
      if (whyChooseRef.current) {
        tl.from(whyChooseRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.5");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const next = () => setIndex((prev) => (prev + CARDS_PER_VIEW) % total);
  const prev = () => setIndex((prev) => (prev - CARDS_PER_VIEW + total) % total);

  // Desktop & tablet visible cards
  const visibleCards = Array.from({ length: CARDS_PER_VIEW }, (_, i) =>
    TestmonialsCards[(index + i) % total]
  );

  return (
    <div
      ref={sectionRef}
      data-scroll-section
      className="w-screen lg:h-full pb-8 md:h-[55vh] px-[5vw] bg-[#FEF1D9] md:bg-[#3E2519]"
    >
      {/* Section title */}
      <div className="flex justify-center md:justify-between items-center text-white py-[4vh] md:py-10">
        <div
          ref={titleRef}
          className="text-[10vw] text-[#3E2519] md:text-[#FEF1D9] text-center md:text-left md:text-[4.5vw] font-light uppercase"
        >
          clients feedback
        </div>
        <div className="hidden md:block">Harmony, Materiality & Feeling</div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex items-center justify-center gap-6">
        <button onClick={prev} className="text-4xl text-white">
          <IoMdArrowRoundBack />
        </button>

        <div className="flex gap-5">
          {visibleCards.map((card, i) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-[20vw] h-[50vh] bg-[#FEF1D9] rounded-3xl p-[1vw] text-[#3E2519] flex flex-col gap-2"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={card.image}
                    loading="lazy"
                    className="w-[4vw] h-[8vh] rounded-full object-top object-cover"
                  />
                  <div>
                    <p className="text-[1vw] font-semibold">{card.name}</p>
                    <p className="text-[1vw] opacity-70">{card.title}</p>
                  </div>
                </div>
                <div className="flex justify-between flex-row gap-1 my-1">
                  <div className="flex flex-row gap-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                      if (i < full) return <FaStar key={i} className="text-[1vw]" />;
                      else if (i === full && half) return <FaStarHalfAlt key={i} className="text-[1vw]" />;
                      else return <FaRegStar key={i} className="text-[1vw]" />;
                    })}
                  </div>
                  <div className="text-[1vw]">Rating ({card.rating})</div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[1.1vw] text-center">{card.descriptionOne}</p>
                  <p className="text-[1vw] text-center opacity-70 mt-2">{card.descriptionTwo}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={next} className="text-4xl text-white">
          <IoMdArrowRoundForward />
        </button>
      </div>

      {/* Mobile Swiper view */}
      <div className="md:hidden" ref={mobileRef}>
        <Swiper spaceBetween={15} slidesPerView={1}>
          {TestmonialsCards.map((card) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <SwiperSlide key={card.id}>
                <div className="w-full h-64 text-[#FEF1D9] rounded-3xl p-5 bg-[#3E2519] flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={card.image} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold">{card.name}</p>
                        <p className="text-xs opacity-70">{card.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row gap-1 ">
                    <div className="flex flex-row gap-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        if (i < full) return <FaStar key={i} />;
                        else if (i === full && half) return <FaStarHalfAlt key={i} />;
                        else return <FaRegStar key={i} />;
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-center">{card.descriptionOne}</p>
                    <p className="text-xs text-center opacity-70 mt-2">{card.descriptionTwo}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="text-center block md:hidden py-3">&lt;&lt;&nbsp;&nbsp;Swipe&nbsp;&nbsp;&gt;&gt;</div>

      {/* Why choose us */}
      <div ref={whyChooseRef} className="md:hidden block">
        <div className="uppercase text-[12vw] py-[3vh] text-[#3E2519] text-center leading-none">why choose us?</div>
        <div className="text-[4vw] text-center">
          “LINEA Interiors showed a strong understanding of space planning and design balance. The concepts were clean, modern, and practical for real-world execution.”
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
