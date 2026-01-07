import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TestmonialsCards } from "../../constants/constants";

const CARDS_PER_VIEW = 4;

const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const total = TestmonialsCards.length;

  const visibleCards = Array.from({ length: CARDS_PER_VIEW }, (_, i) =>
    TestmonialsCards[(index + i) % total]
  );

  const next = () =>
    setIndex((prev) => (prev + CARDS_PER_VIEW) % total);

  const prev = () =>
    setIndex((prev) => (prev - CARDS_PER_VIEW + total) % total);

  return (
    <div
      data-scroll-section
      className="w-screen h-screen px-[5vw] bg-[#3E2519]"
    >
      <div className="flex justify-between text-white py-10">
        <div className="text-[4.5vw] font-light uppercase">
          client feedback
        </div>
        <div>Harmony, Materiality & Feeling</div>
      </div>

      <div className="flex items-center justify-center gap-6">
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
                "
              >
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

                <div className="flex gap-1 my-3">
                  {Array.from({ length: full }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {half && <FaStarHalfAlt />}
                </div>

                <p className="text-sm">{card.descriptionOne}</p>
                <p className="text-xs opacity-70 mt-2">
                  {card.descriptionTwo}
                </p>
              </div>
            );
          })}
        </div>

        <button onClick={next} className="text-4xl text-white">
          <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Testmonial;
