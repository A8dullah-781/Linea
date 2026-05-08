import React, { useState, useMemo, useEffect, memo, useCallback, lazy, Suspense } from "react";
import { TestmonialsCards } from "../../constants/constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MobileSwiper = lazy(() =>
  Promise.all([
    import("swiper/react"),
    import("swiper/css"),
  ]).then(([{ Swiper, SwiperSlide }]) => ({
    default: ({ cards }) => (
      <Swiper spaceBetween={15} slidesPerView={1}>
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <MobileCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    ),
  }))
);

// ─── Star ─────────────────────────────────────────────────────────────────────
let _starUid = 0;
const Star = memo(({ type = "full", isDesktop }) => {
  const [uid] = useState(() => `hc-${++_starUid}`);
  const filledColor = isDesktop ? "#6C472E" : "#FDD7B0";
  const points = "12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10";

  if (type === "empty") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block flex-shrink-0">
        <polygon points={points} fill="none" stroke="#6C472E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "half") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block flex-shrink-0">
        <defs>
          <clipPath id={uid}>
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>
        </defs>
        <polygon points={points} fill="none" stroke="#6C472E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points={points} fill={filledColor} stroke="#6C472E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" clipPath={`url(#${uid})`} />
      </svg>
    );
  }

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block flex-shrink-0">
      <polygon points={points} fill={filledColor} stroke="#6C472E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

// ─── StarRow ──────────────────────────────────────────────────────────────────
const StarRow = memo(({ rating, isDesktop, textClass = "" }) => {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-[2px] items-center flex-wrap">
      {Array.from({ length: full },  (_, i) => <Star key={`f${i}`} type="full"  isDesktop={isDesktop} />)}
      {half                               && <Star key="h"          type="half"  isDesktop={isDesktop} />}
      {Array.from({ length: empty }, (_, i) => <Star key={`e${i}`} type="empty" isDesktop={isDesktop} />)}
      <span className={`ml-1 ${textClass}`}>({rating})</span>
    </div>
  );
});

// ─── Desktop / Tablet Card ────────────────────────────────────────────────────
const DesktopCard = memo(({ card, isTablet }) => (
  <div
    className="bg-[#FEF1D9] rounded-3xl text-[#3E2519] flex flex-col gap-3"
    style={{
      // fixed pixel sizes per breakpoint — no vh so tablet isn't blown up
      width:   isTablet ? "38vw"  : "20vw",
      minWidth: isTablet ? "160px" : "180px",
      height:  isTablet ? "auto"  : "auto",
      padding: isTablet ? "14px"  : "clamp(12px, 1vw, 20px)",
      willChange: "transform",
      backfaceVisibility: "hidden",
    }}
  >
    <div className="flex flex-row gap-2 items-center">
      <div
        className="rounded-full overflow-hidden flex-shrink-0"
        style={{ width: isTablet ? 40 : 56, height: isTablet ? 40 : 56 }}
      >
        <img
          src={card.image}
          loading="lazy"
          alt={card.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="min-w-0">
        <p className="font-semibold truncate" style={{ fontSize: isTablet ? "11px" : "clamp(10px,1vw,14px)" }}>
          {card.name}
        </p>
        <p className="opacity-70 truncate" style={{ fontSize: isTablet ? "10px" : "clamp(9px,0.9vw,13px)" }}>
          {card.title}
        </p>
        <StarRow rating={card.rating} isDesktop={true} textClass={isTablet ? "text-[10px]" : "text-[1vw]"} />
      </div>
    </div>

    <p className="text-center leading-snug" style={{ fontSize: isTablet ? "11px" : "clamp(10px,1.1vw,15px)" }}>
      {card.descriptionOne}
    </p>
    <p className="text-center opacity-70 mt-auto pt-1" style={{ fontSize: isTablet ? "10px" : "clamp(9px,1vw,13px)" }}>
      {card.descriptionTwo}
    </p>
  </div>
));

// ─── Mobile Card ──────────────────────────────────────────────────────────────
const MobileCard = memo(({ card }) => (
  <div className="w-full h-64 text-[#FEF1D9] rounded-3xl p-5 bg-[#3E2519] flex flex-col gap-2">
    <div className="flex gap-3 items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img src={card.image} loading="lazy" alt={card.name} className="w-full h-full object-cover object-top" />
      </div>
      <div>
        <p className="text-sm font-semibold">{card.name}</p>
        <p className="text-xs opacity-70">{card.title}</p>
      </div>
    </div>
    <StarRow rating={card.rating} isDesktop={false} textClass="text-xs" />
    <p className="text-sm text-center">{card.descriptionOne}</p>
    <p className="text-xs text-center opacity-70 mt-1">{card.descriptionTwo}</p>
  </div>
));

// ─── Main ─────────────────────────────────────────────────────────────────────
const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const [breakpoint, setBreakpoint] = useState(() => {
    const w = window.innerWidth;
    return w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
  });

  const total = TestmonialsCards.length;

  // Show 2 cards on tablet, 4 on desktop
  const CARDS_PER_VIEW = breakpoint === "tablet" ? 2 : 4;

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setBreakpoint(w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Reset index when cards-per-view changes to avoid out-of-range
  useEffect(() => {
    setIndex(0);
  }, [CARDS_PER_VIEW]);

  const next = useCallback(
    () => setIndex((prev) => (prev + CARDS_PER_VIEW) % total),
    [total, CARDS_PER_VIEW]
  );
  const prev = useCallback(
    () => setIndex((prev) => (prev - CARDS_PER_VIEW + total) % total),
    [total, CARDS_PER_VIEW]
  );

  const visibleCards = useMemo(
    () => Array.from({ length: CARDS_PER_VIEW }, (_, i) => TestmonialsCards[(index + i) % total]),
    [index, total, CARDS_PER_VIEW]
  );

  const isTablet  = breakpoint === "tablet";
  const isMobile  = breakpoint === "mobile";

  return (
    <div className="w-screen h-full pb-8 px-[5vw] bg-[#FEF1D9] md:bg-[#3E2519]">
      {/* Header */}
      <div className="flex justify-center md:justify-between items-center text-white py-[4vh] lg:py-10">
        <div className="text-[10vw] text-[#3E2519] md:text-[#FEF1D9] text-center md:text-left md:text-[4.5vw] font-light uppercase">
          clients feedback
        </div>
        <div className="hidden md:block text-sm lg:text-base">Harmony, Materiality & Feeling</div>
      </div>

      {/* ── Desktop + Tablet ── */}
      {!isMobile && (
        <div className="flex items-center justify-center gap-4 lg:gap-10">
          {/* Arrow — always visible, never overflows */}
          <button
            onClick={prev}
            className="text-white flex-shrink-0 text-3xl lg:text-4xl p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous"
          >
            <IoIosArrowBack />
          </button>

        <div className="flex gap-4 lg:gap-5 justify-center">
            {visibleCards.map((card) => (
              <DesktopCard key={card.id} card={card} isTablet={isTablet} />
            ))}
          </div>

          <button
            onClick={next}
            className="text-white flex-shrink-0 text-3xl lg:text-4xl p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}

      {/* ── Mobile Swiper ── */}
      {isMobile && (
        <div>
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-[#3E2519]">Loading...</div>}>
            <MobileSwiper cards={TestmonialsCards} />
          </Suspense>
          <div className="text-center py-3">&lt;&lt;&nbsp;&nbsp;Swipe&nbsp;&nbsp;&gt;&gt;</div>
        </div>
      )}

      {/* ── Mobile bottom text ── */}
      {isMobile && (
        <div className="block text-center">
          <div className="uppercase text-[12vw] py-[3vh] text-[#3E2519] leading-none">
            why choose us?
          </div>
          <div className="text-[4vw]">
            "LINEA Interiors showed a strong understanding of space planning and
            design balance. The concepts were clean, modern, and practical for
            real-world execution."
          </div>
        </div>
      )}
    </div>
  );
};

export default Testmonial;