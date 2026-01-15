import React, { useState, useMemo, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TestmonialsCards } from "../../constants/constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// memoized lightweight SVG star
const Star = memo(({ type = "full", isDesktop }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={isDesktop ? "#6C472E" : "#FDD7B0"}
      stroke="#6C472E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={
        type === "half"
          ? { clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }
          : {}
      }
      className="inline-block"
    >
      <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
    </svg>
  );
});

const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const total = TestmonialsCards.length;
  const CARDS_PER_VIEW = 4;

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + CARDS_PER_VIEW) % total);
  const prev = () =>
    setIndex((prev) => (prev - CARDS_PER_VIEW + total) % total);

  const visibleCards = useMemo(() => {
    return Array.from({ length: CARDS_PER_VIEW }, (_, i) =>
      TestmonialsCards[(index + i) % total]
    );
  }, [index, total]);

  const cardStyle = {
    willChange: "transform",
    backfaceVisibility: "hidden",
  };

  return (
    <div className="w-screen h-full pb-8 px-[5vw] bg-[#FEF1D9] md:bg-[#3E2519]">
      {/* Title */}
      <div className="flex justify-center md:justify-between items-center text-white py-[4vh] lg:py-10">
        <div className="text-[10vw] text-[#3E2519] md:text-[#FEF1D9] text-center md:text-left md:text-[4.5vw] font-light uppercase">
          clients feedback
        </div>
        <div className="hidden md:block">Harmony, Materiality & Feeling</div>
      </div>

      {/* Desktop + Tablet */}
      <div className="hidden md:flex items-center justify-center lg:gap-10 md:gap-6">
        <button onClick={prev} className="text-4xl text-white">
          <IoIosArrowBack />
        </button>

        <div className="flex gap-5">
          {visibleCards.map((card) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <div
                key={card.id}
                style={cardStyle}
                className="md:w-[25vw] lg:w-[20vw] md:h-[25vh] lg:h-[50vh] bg-[#FEF1D9] rounded-3xl p-[1vw] text-[#3E2519] flex flex-col gap-4"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={card.image}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-top"
                  />
                  <div>
                    <p className="text-[1vw] font-semibold">{card.name}</p>
                    <p className="text-[1vw] opacity-70">{card.title}</p>
                    <div className="flex gap-1 my-1 items-center">
                      {Array.from({ length: 5 }).map((_, i) => {
                        if (i < full)
                          return (
                            <Star key={i} type="full" isDesktop={isDesktop} />
                          );
                        if (i === full && half)
                          return (
                            <Star key={i} type="half" isDesktop={isDesktop} />
                          );
                        return (
                          <Star key={i} type="empty" isDesktop={isDesktop} />
                        );
                      })}
                      <span className="text-[1vw] ml-2">
                        ({card.rating})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[1.1vw] text-center">
                  {card.descriptionOne}
                </p>
                <p className="text-[1vw] text-center opacity-70 mt-2">
                  {card.descriptionTwo}
                </p>
              </div>
            );
          })}
        </div>

        <button onClick={next} className="text-4xl text-white">
          <IoIosArrowForward />
        </button>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper spaceBetween={15} slidesPerView={1}>
          {TestmonialsCards.map((card) => {
            const full = Math.floor(card.rating);
            const half = card.rating % 1 >= 0.5;

            return (
              <SwiperSlide key={card.id}>
                <div className="w-full h-64 text-[#FEF1D9] rounded-3xl p-5 bg-[#3E2519] flex flex-col gap-2">
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

                  <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      if (i < full)
                        return (
                          <Star key={i} type="full" isDesktop={false} />
                        );
                      if (i === full && half)
                        return (
                          <Star key={i} type="half" isDesktop={false} />
                        );
                      return (
                        <Star key={i} type="empty" isDesktop={false} />
                      );
                    })}
                    <span className="text-xs ml-1">({card.rating})</span>
                  </div>

                  <p className="text-sm text-center">
                    {card.descriptionOne}
                  </p>
                  <p className="text-xs text-center opacity-70 mt-1">
                    {card.descriptionTwo}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="text-center py-3">
          &lt;&lt;&nbsp;&nbsp;Swipe&nbsp;&nbsp;&gt;&gt;
        </div>
      </div>

      {/* Why choose us */}
      <div className="md:hidden block text-center">
        <div className="uppercase text-[12vw] py-[3vh] text-[#3E2519] leading-none">
          why choose us?
        </div>
        <div className="text-[4vw]">
          “LINEA Interiors showed a strong understanding of space planning and
          design balance. The concepts were clean, modern, and practical for
          real-world execution.”
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
