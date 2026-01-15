import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const leftImg = useRef(null);
  const rightImgs = useRef([]);

  useEffect(() => {
    // Left image: subtle opacity + y + scale
    gsap.fromTo(
      leftImg.current,
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
          gsap.to(leftImg.current, { scale: 1, duration: 0.3, ease: "power1.out" });
        },
      }
    );

    // Right images: subtle stagger + y + opacity
    gsap.fromTo(
      rightImgs.current,
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
  }, []);

  const imgStyle = { willChange: "transform, opacity" };

  return (
    <div
      ref={sectionRef}
      className="w-full hidden px-[4.5vw] pb-2 gap-2 justify-center items-end bg-[#3E2519] lg:flex h-screen"
    >
      <div
        ref={leftImg}
        style={imgStyle}
        className="h-[90%] w-[40%] bg-[url(/images/feature/featureOne.webp)] bg-cover bg-center"
      ></div>

      <div className="h-[90%] flex flex-col justify-center items-center gap-2 w-[60%]">
        <div
          ref={(el) => (rightImgs.current[0] = el)}
          style={imgStyle}
          className="h-1/2 w-full bg-[url(/images/feature/featureTwo.webp)] bg-cover bg-center"
        ></div>
        <div
          ref={(el) => (rightImgs.current[1] = el)}
          style={imgStyle}
          className="h-1/2 w-full bg-[url(/images/feature/featureThree.webp)] bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export default Featured;
