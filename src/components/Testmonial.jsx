import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TestmonialsCards } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CARDS_PER_VIEW = 4;

const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const total = TestmonialsCards.length;

  // Desktop & tablet visible cards
  const visibleCards = Array.from({ length: CARDS_PER_VIEW }, (_, i) =>
    TestmonialsCards[(index + i) % total]
  );

  const next = () => setIndex((prev) => (prev + CARDS_PER_VIEW) % total);
  const prev = () => setIndex((prev) => (prev - CARDS_PER_VIEW + total) % total);

  return (
    <div
      data-scroll-section
      className="w-screen  lg:h-full pb-8 md:h-[55vh] px-[5vw] bg-[#FEF1D9] md:bg-[#3E2519]"
    >
      <div className="flex justify-center md:justify-between items-center text-white py-[4vh] md:py-10">
        <div className="text-[10vw] text-[#3E2519] md:text-[#FEF1D9] text-center md:text-left md:text-[4.5vw] font-light uppercase">clients feedback</div>
        <div className="hidden md:block">Harmony, Materiality & Feeling</div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex items-center justify-center gap-6">
        <button onClick={prev} className="text-4xl text-white">
          <IoMdArrowRoundBack />
        </button>

        <div className="flex gap-5">
          {visibleCards.map((card) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <div
                key={card.id}
                className="
                  w-[20vw] h-[60vh]
                  bg-[#FEF1D9]
                  rounded-3xl p-5
                  text-[#3E2519]
                  transition-all duration-300 ease-out
                  opacity-100
                  flex justify-start gap-6 flex-col relative
                "
              >
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src={card.image}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{card.name}</p>
                      <p className="text-xs opacity-70">{card.title}</p>
                    </div>
                  </div>

                  <div className="flex justify-between flex-row gap-1 my-3">
                    <div className="flex flex-row gap-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        if (i < full) return <FaStar key={i} />;
                        else if (i === full && half) return <FaStarHalfAlt key={i} />;
                        else return <FaRegStar key={i} />;
                      })}
                    </div>
                    <div>Rating ({card.rating})</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-center">{card.descriptionOne}</p>
                  <p className="text-xs text-center opacity-70 mt-2">
                    {card.descriptionTwo}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={next} className="text-4xl text-white">
          <IoMdArrowRoundForward />
        </button>
      </div>

      {/* Tablet view */}
    <div className="hidden md:flex lg:hidden items-center justify-center gap-6">
  <button onClick={prev} className="text-4xl text-[#FEF1D9]">
    <IoMdArrowRoundBack />
  </button>

  <div className="flex gap-5">
    {Array.from({ length: 3 }).map((_, i) => {
      const card = TestmonialsCards[(index + i) % total];
      const full = Math.floor(card.rating);
      const half = card.rating % 1 >= 0.5;

      return (
        <div
          key={card.id}
          className="
            w-[26vw] 
            bg-[#FEF1D9]
            rounded-3xl p-5
            text-[#3E2519]
            flex flex-col gap-4 relative justify-start
          "
        >
          <div className="flex gap-3 justify-center items-center">
            
            <div className="w-12 h-12 rounded-full bg-[url(`${card.image}`)] object-cover"></div>
            <div>
              <p className="text-sm font-semibold">{card.name}</p>
              <p className="text-xs opacity-70">{card.title}</p>
            </div>
          </div>

          <div className="flex justify-center flex-row gap-1 my-2">
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
      );
    })}
  </div>

  <button onClick={next} className="text-4xl text-[#FEF1D9]">
    <IoMdArrowRoundForward />
  </button>
</div>


      {/* Mobile view */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
        >
          {TestmonialsCards.map((card) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <SwiperSlide key={card.id}>
                <div
                  className="
                    w-full h-64
                    text-[#FEF1D9]
                    rounded-3xl p-5
                    bg-[#3E2519]
                    flex justify-start gap-6 flex-col relative
                  "
                >
                  <div className="flex flex-row justify-between items-center " >
                    <div className="flex gap-3 items-center">
                      <img
                        src={card.image}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{card.name}</p>
                        <p className="text-xs opacity-70">{card.title}</p>
                      </div>
                    </div>

                    <div className="flex justify-between flex-row gap-1 my-3">
                      <div className="flex flex-row gap-1">
                        {Array.from({ length: 5 }).map((_, i) => {
                          if (i < full) return <FaStar key={i} />;
                          else if (i === full && half) return <FaStarHalfAlt key={i} />;
                          else return <FaRegStar key={i} />;
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-center">{card.descriptionOne}</p>
                    <p className="text-xs text-center opacity-70 mt-2">
                      {card.descriptionTwo}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="text-center block md:hidden py-3">&lt;&lt;&nbsp;&nbsp;Swipe&nbsp;&nbsp;&gt;&gt;</div>

      <div className="md:hidden block">
        <div className="uppercase text-[12vw] py-[3vh] text-[#3E2519] text-center leading-none">why choose us?</div>
        <div className="text-[4vw] text-center">“LINEA Interiors showed a strong understanding of space planning and design balance. The concepts were clean, modern, and practical for real-world execution.”</div>
      </div>
    </div>
  );
};

export default Testmonial;
