import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const leftImg = useRef(null);
  const rightImgs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      leftImg.current,
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      rightImgs.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full hidden px-[4.5vw] pb-2 gap-2 justify-center items-end bg-[#3E2519] lg:flex h-screen"
    >
      <div
        ref={leftImg}
        className="h-[90%] w-[40%] bg-[url(/images/feature/featureOne.webp)] bg-cover bg-center"
      ></div>

      <div className="h-[90%] flex flex-col justify-center items-center gap-2 w-[60%]">
        <div
          ref={(el) => (rightImgs.current[0] = el)}
          className="h-1/2 w-full bg-[url(/images/feature/featureTwo.webp)] bg-cover bg-center"
        ></div>
        <div
          ref={(el) => (rightImgs.current[1] = el)}
          className="h-1/2 w-full bg-[url(/images/feature/featureThree.webp)] bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export default Featured;
