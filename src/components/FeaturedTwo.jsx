import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const leftImgs = useRef([]);
  const rightImg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      leftImgs.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      }
    ).fromTo(
      rightImg.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full hidden px-[4.5vw] gap-2 justify-center items-start bg-[#3E2519] lg:flex h-screen"
    >
      <div className="h-[92%] flex flex-col justify-center items-center gap-2 w-[60%]">
        <div
          ref={(el) => (leftImgs.current[0] = el)}
          className="h-1/2 w-full bg-[url(/images/feature/featureFour.webp)] bg-cover bg-center"
        ></div>
        <div
          ref={(el) => (leftImgs.current[1] = el)}
          className="h-1/2 w-full bg-[url(/images/feature/featureFive.webp)] bg-cover bg-center"
        ></div>
      </div>

      <div
        ref={rightImg}
        className="h-[92%] w-[40%] bg-[url(/images/feature/featureSix.webp)] bg-cover bg-center"
      ></div>
    </div>
  );
};

export default Featured;
