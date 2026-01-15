import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const leftImgs = useRef([]);
  const rightImg = useRef(null);

  useEffect(() => {
    // Left images: subtle y + opacity
    gsap.fromTo(
      leftImgs.current,
      { opacity: 0.7, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Right image: subtle y + scale
    gsap.fromTo(
      rightImg.current,
      { opacity: 0.7, y: 20, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1.02,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        onComplete: () => {
          gsap.to(rightImg.current, { scale: 1, duration: 0.3, ease: "power1.out" });
        },
      }
    );
  }, []);

  const imgStyle = { willChange: "transform, opacity" };

  return (
    <div
      ref={sectionRef}
      className="w-full hidden px-[4.5vw] gap-2 justify-center items-start bg-[#3E2519] lg:flex h-screen"
    >
      <div className="h-[92%] flex flex-col justify-center items-center gap-2 w-[60%]">
        <div
          ref={(el) => (leftImgs.current[0] = el)}
          style={imgStyle}
          className="h-1/2 w-full bg-[url(/images/feature/featureFour.webp)] bg-cover bg-center"
        ></div>
        <div
          ref={(el) => (leftImgs.current[1] = el)}
          style={imgStyle}
          className="h-1/2 w-full bg-[url(/images/feature/featureFive.webp)] bg-cover bg-center"
        ></div>
      </div>

      <div
        ref={rightImg}
        style={imgStyle}
        className="h-[92%] w-[40%] bg-[url(/images/feature/featureSix.webp)] bg-cover bg-center"
      ></div>
    </div>
  );
};

export default Featured;
